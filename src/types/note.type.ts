import type { ComponentType } from 'svelte'

export type Note = {
	id: string
	date: string
	title: string
	component: ComponentType
}

export type NoteProps = {
	note: Note
	nextNote?: Note
	previousNote?: Note
}
