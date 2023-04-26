<script lang="ts">
	import { onMount, type ComponentType } from 'svelte';

  export let data;
  let component: ComponentType | null = null

  onMount(() => {
    component = data.component;
  })
</script>

{#if component}
  <svelte:component this={component} />
{/if}