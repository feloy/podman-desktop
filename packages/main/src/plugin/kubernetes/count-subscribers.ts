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

import type { Event } from '../events/emitter.js';
import { Emitter } from '../events/emitter.js';

/**
 * CountSubscribers registers the number of subscribers
 * and emits signals for the first subscriber and the latest unsubscriber
 * */
export class CountSubscribers {
  #subscribers: number = 0;

  #onFirstSubscriber = new Emitter<void>();
  onFirstSubscriber: Event<void> = this.#onFirstSubscriber.event;

  #onNoMoreSubscriber = new Emitter<void>();
  onNoMoreSubscriber: Event<void> = this.#onNoMoreSubscriber.event;

  subscribe(): void {
    if (!this.#subscribers) {
      this.#onFirstSubscriber.fire();
    }
    this.#subscribers++;
  }

  unsubscribe(): void {
    this.#subscribers--;
    if (!this.#subscribers) {
      this.#onNoMoreSubscriber.fire();
    }
  }

  hasSubscribers(): boolean {
    return this.#subscribers > 0;
  }
}
