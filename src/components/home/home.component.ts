import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { showAddEditNoteModal, setFormMode } from 'src/app/reducers/actions/actions';
import { Observable } from 'rxjs';
import { removeNoteModal } from 'src/app/reducers/selectors/selectors';
import { NoteService } from 'src/services/note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    public router: Router,
    public noteService: NoteService
  ) { }
  priorities = [
    { level: 'Haute', routeName: 'haute' },
    { level: 'Elevee', routeName: 'elevee' },
    { level: 'Moyenne', routeName: 'moyenne' },
    { level: 'Basse', routeName: 'basse' }
  ]

  showAddEditForm() {
    this.noteService.showAddEditForm();
  }
}