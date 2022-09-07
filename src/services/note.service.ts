import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import {
  showRemoveNoteModal,
  hideRemoveNoteModal,
  removeNote,
  addNote,
  updateNote,
  showAddEditNoteModal,
  getNoteId,
  hideAddEditNoteToast,
  showAddEditNoteToast,
  setFromMode
} from 'src/app/reducers/actions/actions';
import { Store } from '@ngrx/store';
import { State } from '../app/reducers/index';
import { INote } from './note.model';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private store: Store<State>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  showDeleteNoteModal(id: number) {
    this.store.dispatch(showRemoveNoteModal({ selectedNoteId: id, showRemoveNoteModal: true }))
  }

  hideDeleteNoteModal() {
    this.store.dispatch(hideRemoveNoteModal({ showRemoveNoteModal: false }));
  }

  deleteNote(id: number) {
    this.store.dispatch(removeNote({ selectedNoteId: id }));
    this.hideDeleteNoteModal();
  }

  showAddEditNoteModal() {
    this.store.dispatch(showAddEditNoteModal({ showAddEditNoteModal: true }));
  }

  showAddEditModalForUpdating(id: number) {
    console.log('showAddEditModalForUpdating')
    this.store.dispatch(showAddEditNoteModal({ showAddEditNoteModal: true }));
    this.store.dispatch(getNoteId({ selectedNoteId: id }));
    this.store.dispatch(setFromMode({ isAddMode: false }));
  }

  showAddEditModalForCreating() {
    this.store.dispatch(showAddEditNoteModal({ showAddEditNoteModal: true }))
  }

  addNote(obj: INote) {
    this.store.dispatch(addNote({ note: obj }));
    this.store.dispatch(showAddEditNoteModal({ showAddEditNoteModal: false }));
    this.store.dispatch(showAddEditNoteToast({ showAddEditNoteToast: true }));
    setTimeout(
      () => this.store.dispatch(hideAddEditNoteToast()),
      5000
    )
  }

  updateNote(notesArr: INote[]) {
    this.store.dispatch(updateNote({ notes: notesArr }));
    this.store.dispatch(showAddEditNoteModal({ showAddEditNoteModal: false }));
    this.store.dispatch(showAddEditNoteToast({ showAddEditNoteToast: true }));
    this.router.navigate([`notes/${notesArr[0].priority}`], { relativeTo: this.route })
    setTimeout(
      () => this.store.dispatch(hideAddEditNoteToast()),
      5000
    )
  }
}
