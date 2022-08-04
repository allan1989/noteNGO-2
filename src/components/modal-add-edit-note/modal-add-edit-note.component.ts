import { Component, OnInit } from '@angular/core';
import { 
  selectNotes, 
  selectSingleNoteForModal, 
  addEditNoteModal, 
  AddEditNoteModalMode,
  getSelectedNoteId 
} from 'src/app/reducers/selectors/selectors';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INote } from 'src/services/note.model';
import { showAddEditNoteModal } from 'src/app/reducers/actions/actions';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/services/note.service';

@Component({
  selector: 'app-modal-add-edit-note',
  templateUrl: './modal-add-edit-note.component.html',
  styleUrls: ['./modal-add-edit-note.component.scss']
})
export class ModalAddEditNoteComponent implements OnInit {

  public hasNotes$: Observable<INote[]>;
  public showAddEditNoteModal$: Observable<boolean>;
  public isAddMode$: Observable<boolean>;

  public noteForm!: FormGroup;
  public submitted: boolean = false;
  public currentNote:  Observable<INote[]>;

  public currentNotes: INote[];
  public currentNoteId: number;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private noteService: NoteService
  ) { }

  ngOnInit(): void {
      this.hasNotes$ = this.store.pipe(select(selectNotes));
      this.showAddEditNoteModal$ = this.store.pipe(select(addEditNoteModal));
      this.isAddMode$ = this.store.pipe(select(AddEditNoteModalMode));
      this.currentNote = this.store.pipe(select(selectSingleNoteForModal))

      this.noteForm = this.formBuilder.group({
        title: ['', [Validators.required, this.noWhitespaceValidator]],
        body: ['', [Validators.required, this.noWhitespaceValidator]],
        priority: ['', [Validators.required]]
      })

     
      this.isAddMode$.subscribe(
        mode => {
          if(!mode) {
            this.patchFormFields()
          }else {
            this.noteForm.reset()
          }
        }
      )
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  hideModal() {
    this.store.dispatch(showAddEditNoteModal({ 
        showAddEditNoteModal: false,
        isAddMode: true
      }
    ));
  }

  createNewNote() {
    if(this.noteForm.invalid) {
      return;
    }else {
      let id = Math.floor(Math.random() * Date.now()); 
      this.noteForm.value.id = id;
      this.noteService.addNote(this.noteForm.value);
    }
  }

  updateNote():void {
    this.store.pipe(select(selectNotes)).subscribe(
      notes => this.currentNotes = notes
    )

    this.store.pipe(select(getSelectedNoteId)).subscribe(
      id => this.currentNoteId = id
    )

    this.currentNotes = this.currentNotes.map(
      note => {
        if(note.id === this.currentNoteId) {
          return {
            title: this.noteForm.value.title,
            body: this.noteForm.value.body,
            priority: this.noteForm.value.priority,
            id: this.currentNoteId
          }
        }else{
          return note
        }
      }
    )

    this.noteService.updateNote(this.currentNotes);
  }

  patchFormFields() { 
    this.currentNote.subscribe(
      note => {
        this.noteForm.patchValue({
          body: note[0]?.body,
          title: note[0]?.title,
          id: note[0]?.id,
          priority: note[0]?.priority
        })
      }
    )
  }

  onSubmit() {
    this.submitted = true;

    this.isAddMode$.subscribe(
      mode => {
        if(mode) {
          this.createNewNote();
        }else {
          this.updateNote();
        }
      }
    )
  }
}