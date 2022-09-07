import { createAction, props } from "@ngrx/store";
import { INote } from "src/services/note.model";


export const removeNote = createAction(
  '[ NOTES ] Remove Note',
  props<{ selectedNoteId: number }>()
);

export const getNoteId = createAction(
  '[ NOTES ] GET NOTE ID',
  props<{ selectedNoteId: number }>()
);

export const removeNoteSuccess = createAction(
  '[ NOTES ] Remove Note Success'
);

export const showRemoveNoteModal = createAction(
  '[ REMOVE NOTE MODAL ] Show Remove Note Modal',
  props<{ selectedNoteId: number, showRemoveNoteModal: boolean }>()
);

export const hideRemoveNoteModal = createAction(
  '[ REMOVE NOTE MODAL ] Hide Remove Note Modal',
  props<{ showRemoveNoteModal: boolean }>()
)

export const addNote = createAction(
  '[ ADD NOTE ]',
  props<{ note: INote }>()
)

export const updateNote = createAction(
  '[ UPDATE NOTE ]',
  props<{ notes: INote[] }>()
)

export const showAddEditNoteModal = createAction(
  '[ ADD/EDIT NOTE MODAL ]',
  props<{ showAddEditNoteModal: boolean }>()
)

export const setFromMode = createAction(
  '[ ADD/EDIT NOTE MODAL MODE ]',
  props<{ isAddMode: boolean }>()
)

export const showAddEditNoteToast = createAction(
  '[ SHOW NOTE TOAST ]',
  props<{ showAddEditNoteToast: boolean }>()
)

export const hideAddEditNoteToast = createAction(
  '[ HIDE NOTE TOAST ]'
)