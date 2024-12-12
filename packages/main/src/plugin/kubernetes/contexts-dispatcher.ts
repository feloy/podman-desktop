/**********************************************************************
 * Copyright (C) 2024 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import type { KubeConfig } from '@kubernetes/client-node';

import type { Event } from '../events/emitter.js';
import { Emitter } from '../events/emitter.js';
import { FirstSubscriber } from './first-subscriber.js';
import { KubeConfigSingleContext } from './kubeconfig-single-context.js';

export interface DispatcherEvent {
  contextName: string;
  config: KubeConfigSingleContext;
  isCurrent: boolean;
}

/**
 * ContextsDispatcher gets new Kubeconfig values with the `update` method
 * and fires Add/Update/Delete events
 * for contexts added/updated/deleted since previous update
 *
 * the KubeConfig values emitted by add/update contain
 * a single context and its related information (user, cluster),
 * and is set as the current context for the KubeConfig
 */
export class ContextsDispatcher {
  #contexts = new Map<string, DispatcherEvent>();

  #onAdd = new Emitter<DispatcherEvent>();
  #onUpdate = new Emitter<DispatcherEvent>();
  #onDelete = new Emitter<DispatcherEvent>();

  onAdd: Event<DispatcherEvent> = this.#onAdd.event;
  onUpdate: Event<DispatcherEvent> = this.#onUpdate.event;
  onDelete: Event<DispatcherEvent> = this.#onDelete.event;

  #currentContextSubscribers: FirstSubscriber;
  #nonCurrentContextsSubscribers: FirstSubscriber;

  constructor() {
    this.#currentContextSubscribers = new FirstSubscriber();
    this.#currentContextSubscribers.onFirstSubscriber(() => {
      const currentContextEvent = this.#contexts.values().find(e => e.isCurrent);
      if (currentContextEvent) {
        this.#onAdd.fire(currentContextEvent);
      }
    });

    this.#nonCurrentContextsSubscribers = new FirstSubscriber();
    this.#nonCurrentContextsSubscribers.onFirstSubscriber(() => {
      const nonCurrentContextEvents = this.#contexts.values().filter(e => !e.isCurrent);
      for (const nonCurrentContextEvent of nonCurrentContextEvents) {
        this.#onAdd.fire(nonCurrentContextEvent);
      }
    });
  }

  update(kubeconfig: KubeConfig): void {
    const contextsDiff = new Set<string>(this.#contexts.keys());
    for (const kubeContext of kubeconfig.getContexts()) {
      contextsDiff.delete(kubeContext.name);
      const kubeconfigSingleContext = new KubeConfigSingleContext(kubeconfig, kubeContext);
      const isCurrent = kubeContext.name === kubeconfig.currentContext;

      if (!this.#contexts.has(kubeContext.name)) {
        if (this.mustFireEvent(isCurrent)) {
          this.#onAdd.fire({ contextName: kubeContext.name, config: kubeconfigSingleContext, isCurrent });
        }
        this.#contexts.set(kubeContext.name, {
          contextName: kubeContext.name,
          config: kubeconfigSingleContext,
          isCurrent,
        });
        continue;
      }
      if (
        kubeconfigSingleContext.equals(this.#contexts.get(kubeContext.name)?.config) &&
        isCurrent === this.#contexts.get(kubeContext.name)?.isCurrent
      ) {
        // already exists and is the same, nothing to declare
        continue;
      }

      // context has changed
      if (this.mustFireEvent(isCurrent)) {
        this.#onUpdate.fire({
          contextName: kubeContext.name,
          config: kubeconfigSingleContext,
          isCurrent: kubeContext.name === kubeconfig.currentContext,
        });
      }
      this.#contexts.set(kubeContext.name, {
        contextName: kubeContext.name,
        config: kubeconfigSingleContext,
        isCurrent,
      });
    }

    for (const nameOfRemainingContext of contextsDiff.keys()) {
      const ctxToRemove = this.#contexts.get(nameOfRemainingContext);
      if (!ctxToRemove) {
        throw new Error(`config for ${nameOfRemainingContext} not found, should not happen`);
      }
      this.#onDelete.fire({ contextName: nameOfRemainingContext, config: ctxToRemove.config, isCurrent: false });
      this.#contexts.delete(nameOfRemainingContext);
    }
  }

  private mustFireEvent(isCurrent: boolean): boolean {
    return (
      (isCurrent && this.#currentContextSubscribers.hasBeenSubscribed()) ||
      (!isCurrent && this.#nonCurrentContextsSubscribers.hasBeenSubscribed())
    );
  }

  subscribeCurrentContext(): void {
    this.#currentContextSubscribers.subscribe();
  }

  subscribeNonCurrentContexts(): void {
    this.#nonCurrentContextsSubscribers.subscribe();
  }
}
