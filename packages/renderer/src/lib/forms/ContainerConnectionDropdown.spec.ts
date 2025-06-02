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

import '@testing-library/jest-dom/vitest';

import { Dropdown } from '@podman-desktop/ui-svelte';
import { render } from '@testing-library/svelte';
import { tick } from 'svelte';
import { beforeEach, expect, test, vi } from 'vitest';

import ContainerConnectionDropdown from '/@/lib/forms/ContainerConnectionDropdown.svelte';
import ContainerConnectionDropdownTest from '/@/lib/forms/ContainerConnectionDropdownTest.svelte';
import type { ProviderContainerConnectionInfo } from '/@api/provider-info';

vi.mock('@podman-desktop/ui-svelte');

const CONTAINER_CONNECTION_INFO: ProviderContainerConnectionInfo = {
  endpoint: {
    socketPath: 'dummy-socket',
  },
  name: 'podman',
  status: 'started',
  type: 'podman',
  displayName: 'Podman',
  lifecycleMethods: undefined,
};

beforeEach(() => {
  vi.resetAllMocks();
});

test('expect name to be propagated to dropdown component', () => {
  render(ContainerConnectionDropdown, {
    name: 'hello-world',
    connections: [],
    value: undefined,
  });

  expect(Dropdown).toHaveBeenCalledWith(
    expect.anything(),
    expect.objectContaining({
      name: 'hello-world',
    }),
  );
});

test('expect id to be propagated to dropdown component', () => {
  render(ContainerConnectionDropdown, {
    id: 'foo-bar',
    connections: [],
    value: undefined,
  });

  expect(Dropdown).toHaveBeenCalledWith(
    expect.anything(),
    expect.objectContaining({
      id: 'foo-bar',
    }),
  );
});

test('expect dropdown onchange to be propagated', async () => {
  const onchange = vi.fn();
  render(ContainerConnectionDropdown, {
    id: 'foo-bar',
    connections: [CONTAINER_CONNECTION_INFO],
    value: undefined,
    onchange,
  });

  expect(Dropdown).toHaveBeenCalledOnce();
  const { onChange, options } = vi.mocked(Dropdown).mock.calls[0][1];
  // ensure the dropdown received one option
  expect(options).toHaveLength(1);

  // ensure the component has provided on onChange method
  expect(onChange).toBeDefined();
  // simulate user selected the provider container connection
  const value = options?.[0].value;
  if (!value) throw new Error('undefined value for option at index 0');

  onChange?.(value);

  expect(onchange).toHaveBeenCalledWith(CONTAINER_CONNECTION_INFO);
});

test('expect binding to properly work', async () => {
  const { queryByRole, getByRole } = render(ContainerConnectionDropdownTest, {
    connections: [CONTAINER_CONNECTION_INFO],
  });

  expect(Dropdown).toHaveBeenCalledOnce();
  const { onChange, options } = vi.mocked(Dropdown).mock.calls[0][1];

  // ensure the component has provided on onChange method
  expect(onChange).toBeDefined();

  // assert we have no value selected
  let alert = queryByRole('alert');
  expect(alert).toBeNull();

  const value = options?.[0].value;
  if (!value) throw new Error('undefined value for option at index 0');

  onChange?.(value);

  await tick();
  alert = getByRole('alert');
  expect(alert).toBeDefined();
  expect(alert).toHaveTextContent(CONTAINER_CONNECTION_INFO.name);
});
