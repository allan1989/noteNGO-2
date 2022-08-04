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
  canUseLocalStorage: boolean,
  data: INote[],
  showRemoveNoteModal: boolean,
  selectedNoteId: number,
  showAddEditNoteModal: boolean,
  isAddMode: boolean,
  showAddEditNoteToast: boolean
}

export const Initialstate: State = {
  canUseLocalStorage: false,
  showRemoveNoteModal: false,
  selectedNoteId: 0,
  showAddEditNoteModal: false,
  isAddMode: true,
  showAddEditNoteToast: false,
  data: [
    {
      id: 1,
      title : "title 1",
      priority : "haute",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      id: 2,
      title : "title 2",
      priority : "moyenne",
      body: 'Etiam rutrum accumsan odio, eget semper orci varius nec'
    },
    {
      id: 3,
      title : "title 3",
      priority : "basse",
      body: 'Nulla porta nec mauris quis rutrum'
    },
    {
      id: 4,
      title : "title 4",
      priority : "haute",
      body: 'Sed quis arcu ut erat posuere porttitor dignissim suscipit magna'
    },
    {
      id: 5,
      title : "title 5",
      priority : "moyenne",
      body: ' Suspendisse dignissim, quam non aliquet tincidunt, arcu ipsum ultricies felis, et eleifend velit eros sed mauris'
    },
    {
      id: 6,
      title : "title 6",
      priority : "basse",
      body: 'Ut sed vulputate ex, tempus laoreet augue'
    },
    {
      id: 7,
      title : "title 7",
      priority : "basse",
      body: 'Curabitur mattis aliquam diam quis lobortis'
    },
    {
      id: 8,
      title : "title 8",
      priority : "elevee",
      body: 'Curabitur mattis aliquam diam quis lobortis'
    }
   ]
}

export const notesReducer = createReducer(
  Initialstate,
  on(actions.checkLocalStorageSuccess, (state, { canUseLocalStorage, data }) => ({ ...state, canUseLocalStorage, data })),
  on(actions.showRemoveNoteModal, (state, {selectedNoteId, showRemoveNoteModal}) => ({
    ...state, selectedNoteId, showRemoveNoteModal
  })),
  on(actions.hideRemoveNoteModal, (state, {showRemoveNoteModal}) => ({ ...state, showRemoveNoteModal})),
  on(actions.removeNote, (state, {selectedNoteId}) => ({
    ...state, data: [...state.data.filter(note => note.id !== selectedNoteId)]
  })),
  on(actions.showAddEditNoteModal, (state, {showAddEditNoteModal, isAddMode}) => ({
    ...state, showAddEditNoteModal, isAddMode
  })),
  on(actions.addNote, (state, {note}) => ({
    ...state, data: [...state.data].concat(note)
  })),
  on(actions.updateNote, (state, {notes}) => ({
    ...state, data: notes
  })),
  on(actions.showAddEditNoteToast, (state) => ({
    ...state, showAddEditNoteToast: true
  })),
  on(actions.hideAddEditNoteToast, (state) => ({
    ...state, showAddEditNoteToast: false
  })),
  on(actions.getNoteId, (state, {selectedNoteId}) => ({
    ...state, selectedNoteId
  }))
)


