import type { ComponentType } from "svelte";
import type { NoteParams, NoteType } from "../../../types/note.type";
import NotFound from "../../../notes/NotFound.svelte";
import GettingStarted from "../../../notes/GettingStarted.svelte";
import AnotherNote from "../../../notes/AnotherNote.svelte";

const getNote = (slug: string): ComponentType => {
  switch (slug.toLowerCase()) {
    case 'getting-started': {
      return GettingStarted;
    }
    case 'another-note': {
      return AnotherNote;
    }
    default: {
      return NotFound;
    }
  }
}

export function load({ params }: {params: NoteParams}): NoteType {
  return { component: getNote(params.slug) }
} 