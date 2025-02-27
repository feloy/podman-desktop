/**********************************************************************
 * Copyright (C) 2025 Red Hat, Inc.
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

import { type Writable, writable } from 'svelte/store';

import { configurationProperties } from './configurationProperties';

export const isKubernetesExperimentalModeStore: Writable<boolean | undefined> = writable();

configurationProperties.subscribe(() => {
  if (window?.getConfigurationValue) {
    window
      ?.getConfigurationValue<boolean>('kubernetes.statesExperimental')
      ?.then(value => isKubernetesExperimentalModeStore.set(value))
      ?.catch((err: unknown) =>
        console.error(`Error getting configuration value 'kubernetes.statesExperimental'}`, err),
      );
  }
});
