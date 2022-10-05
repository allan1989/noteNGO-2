import { Injectable } from '@angular/core';
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
  setFormMode
} from 'src/app/reducers/actions/actions';
import { Store } from '@ngrx/store';
import { IState } from './note.model';
import { INote } from './note.model';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private store: Store<IState>,
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
    this.store.dispatch(showAddEditNoteModal({ showAddEditNoteModal: true }));
    this.store.dispatch(getNoteId({ selectedNoteId: id }));
    this.store.dispatch(setFormMode({ isAddMode: false }));
  }

  showAddEditModalForCreating() {
    this.store.dispatch(showAddEditNoteModal({ showAddEditNoteModal: true }))
  }

  addNote(note: INote) {
    this.store.dispatch(addNote({ note: note }));
    this.store.dispatch(showAddEditNoteModal({ showAddEditNoteModal: false }));
    this.store.dispatch(showAddEditNoteToast({ showAddEditNoteToast: true }));
    this.router.navigate([`notes/${note.priority}`], { relativeTo: this.route })
    setTimeout(
      () => this.store.dispatch(hideAddEditNoteToast()),
      2000
    )
  }

  updateNote(notesArr: INote[]) {
    this.store.dispatch(updateNote({ notes: notesArr }));
    this.store.dispatch(showAddEditNoteModal({ showAddEditNoteModal: false }));
    this.store.dispatch(showAddEditNoteToast({ showAddEditNoteToast: true }));
    this.router.navigate([`notes/${notesArr[0].priority}`], { relativeTo: this.route })
    setTimeout(
      () => this.store.dispatch(hideAddEditNoteToast()),
      2000
    )
  }
}