<script lang="ts">
import { providerInfos } from '/@/stores/providers';
import type { ProviderInfo } from '/@api/provider-info';

import ProviderWidget from './ProviderWidget.svelte';

let providers: ProviderInfo[] = $derived(
  $providerInfos.filter(
    provider => provider.containerConnections.length > 0 || provider.kubernetesConnections.length > 0,
  ),
);
</script>

{#each providers as entry, i (entry.id)}
  <ProviderWidget entry={entry} tooltipTopRight={i === 0}/>
{/each}
