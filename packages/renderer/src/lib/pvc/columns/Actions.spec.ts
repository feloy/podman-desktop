/**********************************************************************
 * Copyright (C) 2024-2025 Red Hat, Inc.
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

import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';

import type { PVCUI } from '../PVCUI';
import Actions from './Actions.svelte';

test('Expect action buttons', async () => {
  const fakePVC: PVCUI = {
    name: 'pvc-1',
    namespace: 'default',
    status: 'RUNNING',
    storageClass: 'standard',
    accessModes: ['ReadWriteOnce'],
    selected: false,
    size: '1Gi',
  };

  render(Actions, { object: fakePVC });

  const buttons = await screen.findAllByRole('button');
  expect(buttons).toHaveLength(1);
});
