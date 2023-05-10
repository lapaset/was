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
		justify-content: space-evenly;
		align-items: center;
		font-size: 0.8em;
		max-width: 40%;
		width: 56px;
		height: 30px;
		overflow: visible;
		background: aliceblue;
		border-radius: 40%;
		margin-top: 16px;
	}

	.right {
		text-align: right;
	}

	span {
		padding: 0 0.5em;
	}

	:global(svg) {
		max-height: 16px;
		max-width: 16px;
		overflow: visible;
	}
</style>
