import { createAction, props } from "@ngrx/store";
import { INote } from "src/services/note.model";

export const checkLocalStorage = createAction(
  '[ LOCALSTORAGE ] Check'
);

export const checkLocalStorageSuccess = createAction(
  '[ LOCALSTORAGE ] Success',
  props<{ canUseLocalStorage: boolean, data: INote[]}>()
);

export const checkLocalStorageError = createAction(
  '[ LOCALSTORAGE ] Error'
);

export const addToLocalStorage = createAction(
  '[ LOCALSTORAGE ] Add'
);

export const addToLocalStorageSucess = createAction(
  '[ LOCALSTORAGE ] Add Success'
);

export const removeNote = createAction(
  '[ NOTES ] Remove Note',
  props<{ selectedNoteId: number}>() 
);

export const getNoteId = createAction(
  '[ NOTES ] GET NOTE ID',
  props<{ selectedNoteId: number}>() 
);

export const removeNoteSuccess = createAction(
  '[ NOTES ] Remove Note Success' 
);

export const showRemoveNoteModal = createAction(
  '[ REMOVE NOTE MODAL ] Show Remove Note Modal',
  props<{ selectedNoteId: number, showRemoveNoteModal: boolean}>()
);

export const hideRemoveNoteModal = createAction(
  '[ REMOVE NOTE MODAL ] Hide Remove Note Modal',
  props<{ showRemoveNoteModal: boolean}>()
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
  props<{ showAddEditNoteModal: boolean, isAddMode: boolean }>()
)

export const showAddEditNoteToast = createAction(
  '[ SHOW ADD/EDIT NOTE TOAST ]'
)

export const hideAddEditNoteToast = createAction(
  '[ HIDE ADD/EDIT NOTE TOAST ]'
)
