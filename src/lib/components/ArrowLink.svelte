<script lang="ts">
	import Arrow from '../icons/Arrow.svelte'
	export let next: boolean
	export let href: string
</script>

<a {href} class={next ? 'right' : ''}>
	{#if !next}
		<Arrow left={true} />
		<span>Previous</span>
	{/if}

	{#if next}
		<span>Next</span>
		<Arrow left={false} />
	{/if}
</a>

<style>
	a {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 16px 0;
		font-size: 0.8em;
		max-width: 40%;
	}

	.right {
		justify-content: end;
		text-align: right;
	}

	span {
		padding: 0 1em;
	}

	:global(svg) {
		max-height: 16px;
		max-width: 16px;
	}
</style>
