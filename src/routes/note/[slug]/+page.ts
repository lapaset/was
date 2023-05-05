import type { NoteProps } from '../../../types/note.type'
import { notes } from '$lib/notes'

type Params = {
	params: {
		slug: string
	}
}

export const load = ({ params }: Params): NoteProps | undefined => {
	const noteIndex = notes.findIndex((n) => n.id === params.slug)
	if (noteIndex < 0) {
		return undefined
	}

	const nextNote =
		noteIndex < notes.length - 1 ? notes[noteIndex + 1] : undefined
	const previousNote = noteIndex > 0 ? notes[noteIndex - 1] : undefined

	return noteIndex !== undefined
		? { note: notes[noteIndex], nextNote, previousNote }
		: undefined
}
