import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action,
  createReducer,
  on
} from '@ngrx/store';
import * as actions from '../reducers/actions/actions';
import { INote } from 'src/services/note.model';

export interface State {
  data: INote[],
  showRemoveNoteModal: boolean,
  selectedNoteId: number,
  showAddEditNoteModal: boolean,
  isAddMode: boolean,
  showAddEditNoteToast: boolean
}

export const Initialstate: State = {
  showRemoveNoteModal: false,
  selectedNoteId: 0,
  showAddEditNoteModal: false,
  isAddMode: true,
  showAddEditNoteToast: false,
  data: []
}

export const notesReducer = createReducer(
  Initialstate,
  on(actions.showRemoveNoteModal, (state, { selectedNoteId, showRemoveNoteModal }) => ({
    ...state, selectedNoteId, showRemoveNoteModal
  })),
  on(actions.hideRemoveNoteModal, (state, { showRemoveNoteModal }) => ({ ...state, showRemoveNoteModal })),
  on(actions.removeNote, (state, { selectedNoteId }) => ({
    ...state, data: [...state.data.filter(note => note.id !== selectedNoteId)]
  })),
  on(actions.showAddEditNoteModal, (state, { showAddEditNoteModal }) => ({
    ...state, showAddEditNoteModal
  })),
  on(actions.setFromMode, (state, { isAddMode }) => ({
    ...state, isAddMode
  })),
  on(actions.addNote, (state, { note }) => ({
    ...state, data: [...state.data].concat(note)
  })),
  on(actions.updateNote, (state, { notes }) => ({
    ...state, data: notes
  })),
  on(actions.getNoteId, (state, { selectedNoteId }) => ({
    ...state, selectedNoteId
  })),
  on(actions.showAddEditNoteToast, (state, { showAddEditNoteToast }) => ({
    ...state, showAddEditNoteToast
  })),
  on(actions.hideAddEditNoteToast, (state) => ({
    ...state, showAddEditNoteToast: false
  }))
)


