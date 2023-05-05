<script lang="ts">
	import type { Note } from '../../../types/note.type.js'
	import ArrowLink from '$lib/components/ArrowLink.svelte'

	export let data
	let note: Note | undefined
	let previousNote: Note | undefined
	let nextNote: Note | undefined

	$: note = data.note
	$: previousNote = data.previousNote
	$: nextNote = data.nextNote

	const getUrl = (slug: string) => `/was/note/${slug}`
</script>

{#if note}
	<p class="date">{note.date}</p>
	<h2>{note.title}</h2>

	<svelte:component this={note.component} />

	<navigation>
		{#if previousNote}
			<ArrowLink next={false} href={getUrl(previousNote.id)} />
		{:else}
			<div />
		{/if}

		{#if nextNote}
			<ArrowLink next={true} href={getUrl(nextNote.id)} />
		{/if}
	</navigation>
{/if}

<style>
	:global(p) {
		margin: 24px 0;
	}

	navigation {
		display: flex;
		justify-content: space-between;
	}

	:global(a) {
		color: black;
	}
</style>
