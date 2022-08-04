import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { 
  showRemoveNoteModal, 
  hideRemoveNoteModal, 
  removeNote, 
  addNote, 
  updateNote,
  showAddEditNoteModal,
  showAddEditNoteToast, 
  getNoteId
} from 'src/app/reducers/actions/actions';
import { Store } from '@ngrx/store';
import { State } from '../app/reducers/index';
import { INote } from './note.model';
import { hideAddEditNoteToast } from 'src/app/reducers/actions/actions';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private store: Store<State>
  ) { }

  canUseLocalStorage$: Observable<any>; 


  checkIfLocalStorageExists() {
    const dataFromStorage = localStorage.getItem('notes');
    if(typeof localStorage !== 'undefined'){
      if(localStorage.getItem('notes') !== null && localStorage.getItem('notes')?.length) {

        this.canUseLocalStorage$ = of({
          canUse: true,
          notes: [
          {
            id: 8,
            title : "title 8",
            priority : "elevee",
            body: 'Curabitur mattis aliquam diam quis lobortis'
          },
          {
            id: 9,
            title : "title 9",
            priority : "elevee",
            body: 'Curabitur mattis aliquam diam quis lobortis'
          }]
        });
        return this.canUseLocalStorage$;

      }
      if(localStorage.getItem('notes') === null) {
        localStorage.setItem('notes', JSON.stringify({}))
        
        this.canUseLocalStorage$ = of({
          canUse: true,
          notes: [
          {
            id: 8,
            title : "title 8",
            priority : "elevee",
            body: 'Curabitur mattis aliquam diam quis lobortis'
          },
          {
            id: 9,
            title : "title 9",
            priority : "elevee",
            body: 'Curabitur mattis aliquam diam quis lobortis'
          }]
        });
        return this.canUseLocalStorage$;
     
      }
    }
    return this.canUseLocalStorage$;
  }

  showDeleteNoteModal(id:number) {
    this.store.dispatch(showRemoveNoteModal({selectedNoteId: id, showRemoveNoteModal: true}))
  }
 
  hideDeleteNoteModal() {
    this.store.dispatch(hideRemoveNoteModal({ showRemoveNoteModal: false}));
  }

  deleteNote(id:number) {
    this.store.dispatch(removeNote({selectedNoteId: id}));
    this.hideDeleteNoteModal();
  }

  showAddEditModalForUpdating(id: number) {
    this.store.dispatch(showAddEditNoteModal({
      showAddEditNoteModal: true,
      isAddMode: false
    }));
    this.store.dispatch(getNoteId(
      {selectedNoteId: id}
    ))
  }

  showAddEditModalForCreating() {
    this.store.dispatch(showAddEditNoteModal({
      showAddEditNoteModal: true,
      isAddMode: true
    }))
  }

  addNote(obj:INote) {
    this.store.dispatch(addNote({note: obj}));
    this.store.dispatch(showAddEditNoteModal({
      showAddEditNoteModal: false,
      isAddMode: true
    }));
    this.store.dispatch(showAddEditNoteToast());
    setTimeout(() => this.store.dispatch(hideAddEditNoteToast()), 5000);
  }

  updateNote(notesArr: INote[]) {
    this.store.dispatch(updateNote({notes: notesArr}));
    this.store.dispatch(showAddEditNoteModal({
      showAddEditNoteModal: false,
      isAddMode: false
    }));
    this.store.dispatch(showAddEditNoteToast());
    setTimeout(() => this.store.dispatch(hideAddEditNoteToast()), 5000);
  }
}
