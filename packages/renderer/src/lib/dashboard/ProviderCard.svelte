<script lang="ts">
import type { ProviderInfo } from '/@api/provider-info';

import IconImage from '../appearance/IconImage.svelte';
import ProviderStatus from '../ui/ProviderStatus.svelte';
import ProviderLinks from './ProviderLinks.svelte';

export let provider: ProviderInfo;
</script>

<div
  class="flex bg-[var(--pd-content-card-bg)] rounded-md p-5 gap-3 flex-col flex-nowrap"
  role="region"
  aria-label="{provider.name} Provider">
  <div class="flex flex-col lg:flex-row gap-x-4">
    <div class="grid grid-cols-[3rem_1fr] w-1/4 gap-2">
      <IconImage image="{provider?.images?.icon}" class="mx-0 max-h-12" alt="{provider.name}"></IconImage>
      <div
        class="flex flex-col gap-0 text-[var(--pd-content-card-title)] text-lg whitespace-nowrap"
        aria-label="context-name">
        <div class="flex flex-row gap-1 items-center">
          {provider.name}
          {#if provider.version}
            <div class="text-[var(--pd-content-card-light-title)] text-base" aria-label="Provider Version">
              v{provider.version}
            </div>
          {/if}
        </div>
        <div class="flex flex-row" aria-label="Actual State">
          <ProviderStatus status="{provider.status}" />
        </div>
        <div class="my-3 empty:my-0 w-full">
          <slot name="update" />
        </div>
      </div>
    </div>
    <div class="flex items-center flex-row space-x-10 mt-5 w-full lg:mt-0 lg:w-3/4 flex-nowrap">
      <slot name="content" />
    </div>
  </div>

  <ProviderLinks provider="{provider}" />
</div>
