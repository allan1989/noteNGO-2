import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/services/note.service';
import { INote, IState } from 'src/services/note.model';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectNotesByPriority } from 'src/app/reducers/selectors/selectors';

@Component({
  selector: 'app-note-preview',
  templateUrl: './note-preview.component.html',
  styleUrls: ['./note-preview.component.scss']
})
export class NotePreviewComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  public notes$: Observable<INote[]>;
  public selected: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private noteService: NoteService,
    private store: Store<IState>
  ) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.selected = params.id;
      this.notes$ = this.store.pipe(select(selectNotesByPriority(params.priority)))
    });
  }

  showDeleteNoteModal(id: number) {
    this.noteService.showDeleteNoteModal(id);
  }

  handleSelectedNote(note: INote) {
    this.selected = note.id;
  }

  showAddEditModal(id: number) {
    this.noteService.showAddEditModalForUpdating(id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}