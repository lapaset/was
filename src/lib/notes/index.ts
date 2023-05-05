import GettingStarted from './GettingStarted.svelte'
import type { Note } from '../../types/note.type'

export const notes: Note[] = [
	{
		id: 'getting-started',
		date: '2.5.2023',
		title: 'Getting started',
		component: GettingStarted
	},
]
