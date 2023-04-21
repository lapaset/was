import type { ComponentType } from "svelte";

export type NoteParams = {
  slug: string;
}

export type NoteType = {
  component: ComponentType
}