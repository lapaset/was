import GettingStarted from './GettingStarted.svelte'
import type { Note } from '../../types/note.type'
import Note1 from './1/1-1.svelte'
import Note2 from './1/1-2.svelte'

export const notes: Note[] = [
	{
		id: 'getting-started',
		date: '2.5.2023',
		title: 'Getting started',
		component: GettingStarted
	},
	{
		id: '1.1',
		date: '5.5.2023',
		title:
			'1.1. Understand and interpret accessibility specifications and techniques',
		component: Note1
	}
	/* 	{
		id: '1.2',
		date: '5.5.2023',
		title: 'Understand the relationship between principles, guidelines, and success criteria',
		component: Note2
	} */
]
