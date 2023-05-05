<script>
	import NoteListItem from '$lib/components/NoteListItem.svelte'
	import { notes } from '$lib/notes'
</script>

<p>
	My study plan is structured after the WAS Body of Knowledge (<a
		href="https://www.accessibilityassociation.org/resource/WAS_Certification_FInal_2020_FINAL"
	>
		BOK</a
	>).
</p>

<ul>
	{#each notes as note}
		<NoteListItem id={note.id} date={note.date} title={note.title} />
	{/each}
</ul>

<style>
	ul {
		padding: 0;
	}
</style>
