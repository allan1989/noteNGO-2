import { createAction, props } from "@ngrx/store";
import { INote } from "src/services/note.model";


export const removeNote = createAction(
  '[ NOTES ] REMOVE NOTE',
  props<{ selectedNoteId: number }>()
);

export const getNoteId = createAction(
  '[ NOTES ] GET NOTE ID',
  props<{ selectedNoteId: number }>()
);

export const showRemoveNoteModal = createAction(
  '[ NOTES ] SHOW REMOVE NOTE MODAL',
  props<{ selectedNoteId: number, showRemoveNoteModal: boolean }>()
);

export const hideRemoveNoteModal = createAction(
  '[ NOTES ] HIDE REMOVE NOTE MODAL',
  props<{ showRemoveNoteModal: boolean }>()
)

export const addNote = createAction(
  '[ NOTES ] ADD NOTE ',
  props<{ note: INote }>()
)

export const updateNote = createAction(
  '[ NOTES ] UPDATE NOTE',
  props<{ notes: INote[] }>()
)

export const showAddEditNoteModal = createAction(
  '[ NOTES ] ADD/EDIT NOTE MODAL',
  props<{ showAddEditNoteModal: boolean }>()
)

export const setFormMode = createAction(
  '[ NOTES ] SET MODAL MODE',
  props<{ isAddMode: boolean }>()
)

export const showAddEditNoteToast = createAction(
  '[ NOTES ] SHOW ADD/EDIT TOAST',
  props<{ showAddEditNoteToast: boolean }>()
)

export const hideAddEditNoteToast = createAction(
  '[ NOTES ] HIDE ADD/EDIT TOAST'
)