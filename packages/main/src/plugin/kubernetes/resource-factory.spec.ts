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

import { expect, test } from 'vitest';

import { DeploymentsResourceFactory } from './deployments-resource-factory.js';
import { PodsResourceFactory } from './pods-resource-factory.js';
import { ResourceFactory } from './resource-factory.js';

test('with 1 level and same request', () => {
  const factory = new ResourceFactory();

  factory.add({
    resource: 'resource1',
    isNamespaced: true,
    permissionsRequests: [
      {
        group: '*',
        resource: '*',
        verb: 'watch',
      },
    ],
  });

  factory.add({
    resource: 'resource2',
    isNamespaced: true,
    permissionsRequests: [
      {
        group: '*',
        resource: '*',
        verb: 'watch',
      },
    ],
  });

  const requests = factory.getPermissionsRequests('ns');
  expect(requests).toEqual([
    {
      attrs: {
        namespace: 'ns',
        group: '*',
        resource: '*',
        verb: 'watch',
      },
      resources: ['resource1', 'resource2'],
    },
  ]);
});

test('with 1 level and different requests', () => {
  const factory = new ResourceFactory();

  factory.add({
    resource: 'resource1',
    isNamespaced: true,
    permissionsRequests: [
      {
        group: 'group1',
        resource: '*',
        verb: 'watch',
      },
    ],
  });

  factory.add({
    resource: 'resource2',
    isNamespaced: true,
    permissionsRequests: [
      {
        group: 'group2',
        resource: '*',
        verb: 'watch',
      },
    ],
  });

  const requests = factory.getPermissionsRequests('ns');
  expect(requests).toEqual([
    {
      attrs: {
        namespace: 'ns',
        group: 'group1',
        resource: '*',
        verb: 'watch',
      },
      resources: ['resource1'],
    },
    {
      attrs: {
        namespace: 'ns',
        group: 'group2',
        resource: '*',
        verb: 'watch',
      },
      resources: ['resource2'],
    },
  ]);
});

test('with 2 levels and same request at first level', () => {
  const factory = new ResourceFactory();

  factory.add({
    resource: 'resource1',
    isNamespaced: true,
    permissionsRequests: [
      {
        group: '*',
        resource: '*',
        verb: 'watch',
      },
      {
        verb: 'watch',
        resource: 'resource1',
      },
    ],
  });

  factory.add({
    resource: 'resource2',
    isNamespaced: true,
    permissionsRequests: [
      {
        group: '*',
        resource: '*',
        verb: 'watch',
      },
      {
        verb: 'watch',
        group: 'group2',
        resource: 'resource2',
      },
    ],
  });

  const requests = factory.getPermissionsRequests('ns');
  expect(requests).toEqual([
    {
      attrs: {
        namespace: 'ns',
        group: '*',
        resource: '*',
        verb: 'watch',
      },
      resources: ['resource1', 'resource2'],
      onDenyRequests: [
        {
          attrs: {
            namespace: 'ns',
            verb: 'watch',
            resource: 'resource1',
          },
          resources: ['resource1'],
        },
        {
          attrs: {
            namespace: 'ns',
            verb: 'watch',
            group: 'group2',
            resource: 'resource2',
          },
          resources: ['resource2'],
        },
      ],
    },
  ]);
});

test('with 1 level and same request, non namespaced', () => {
  const factory = new ResourceFactory();

  factory.add({
    resource: 'resource1',
    isNamespaced: false,
    permissionsRequests: [
      {
        group: '*',
        resource: '*',
        verb: 'watch',
      },
    ],
  });

  factory.add({
    resource: 'resource2',
    isNamespaced: false,
    permissionsRequests: [
      {
        group: '*',
        resource: '*',
        verb: 'watch',
      },
    ],
  });

  const requests = factory.getPermissionsRequests('ns');
  expect(requests).toEqual([
    {
      attrs: {
        group: '*',
        resource: '*',
        verb: 'watch',
      },
      resources: ['resource1', 'resource2'],
    },
  ]);
});

test('with 1 level and different requests, non namespaced', () => {
  const factory = new ResourceFactory();

  factory.add({
    resource: 'resource1',
    isNamespaced: false,
    permissionsRequests: [
      {
        group: 'group1',
        resource: '*',
        verb: 'watch',
      },
    ],
  });

  factory.add({
    resource: 'resource2',
    isNamespaced: false,
    permissionsRequests: [
      {
        group: 'group2',
        resource: '*',
        verb: 'watch',
      },
    ],
  });

  const requests = factory.getPermissionsRequests('ns');
  expect(requests).toEqual([
    {
      attrs: {
        group: 'group1',
        resource: '*',
        verb: 'watch',
      },
      resources: ['resource1'],
    },
    {
      attrs: {
        group: 'group2',
        resource: '*',
        verb: 'watch',
      },
      resources: ['resource2'],
    },
  ]);
});

test('with 2 levels and same request at first level, non namespaced', () => {
  const factory = new ResourceFactory();

  factory.add({
    resource: 'resource1',
    isNamespaced: false,
    permissionsRequests: [
      {
        group: '*',
        resource: '*',
        verb: 'watch',
      },
      {
        verb: 'watch',
        resource: 'resource1',
      },
    ],
  });

  factory.add({
    resource: 'resource2',
    isNamespaced: false,
    permissionsRequests: [
      {
        group: '*',
        resource: '*',
        verb: 'watch',
      },
      {
        verb: 'watch',
        group: 'group2',
        resource: 'resource2',
      },
    ],
  });

  const requests = factory.getPermissionsRequests('ns');
  expect(requests).toEqual([
    {
      attrs: {
        group: '*',
        resource: '*',
        verb: 'watch',
      },
      resources: ['resource1', 'resource2'],
      onDenyRequests: [
        {
          attrs: {
            verb: 'watch',
            resource: 'resource1',
          },
          resources: ['resource1'],
        },
        {
          attrs: {
            verb: 'watch',
            group: 'group2',
            resource: 'resource2',
          },
          resources: ['resource2'],
        },
      ],
    },
  ]);
});

test('with 1 level and same request, both namespaced ant not namespaced', () => {
  const factory = new ResourceFactory();

  factory.add({
    resource: 'resource1',
    isNamespaced: true,
    permissionsRequests: [
      {
        group: '*',
        resource: '*',
        verb: 'watch',
      },
    ],
  });

  factory.add({
    resource: 'resource2',
    isNamespaced: false,
    permissionsRequests: [
      {
        group: '*',
        resource: '*',
        verb: 'watch',
      },
    ],
  });

  const requests = factory.getPermissionsRequests('ns');
  expect(requests).toEqual([
    {
      attrs: {
        namespace: 'ns',
        group: '*',
        resource: '*',
        verb: 'watch',
      },
      resources: ['resource1'],
    },
    {
      attrs: {
        group: '*',
        resource: '*',
        verb: 'watch',
      },
      resources: ['resource2'],
    },
  ]);
});

test('real pods and deployments', () => {
  const factory = new ResourceFactory();

  factory.add(new PodsResourceFactory());
  factory.add(new DeploymentsResourceFactory());
  const requests = factory.getPermissionsRequests('ns');
  expect(requests).toEqual([
    {
      attrs: {
        namespace: 'ns',
        group: '*',
        resource: '*',
        verb: 'watch',
      },
      resources: ['pods', 'deployments'],
      onDenyRequests: [
        {
          attrs: {
            namespace: 'ns',
            verb: 'watch',
            resource: 'pods',
          },
          resources: ['pods'],
        },
        {
          attrs: {
            namespace: 'ns',
            verb: 'watch',
            group: 'apps',
            resource: 'deployments',
          },
          resources: ['deployments'],
        },
      ],
    },
  ]);
});
