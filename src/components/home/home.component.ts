import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { showAddEditNoteModal, setFormMode } from 'src/app/reducers/actions/actions';
import { Observable } from 'rxjs';
import { removeNoteModal } from 'src/app/reducers/selectors/selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private store: Store,
    public router: Router,
  ) { }
  priorities = [
    { level: 'Haute', routeName: 'haute' },
    { level: 'Elevee', routeName: 'elevee' },
    { level: 'Moyenne', routeName: 'moyenne' },
    { level: 'Basse', routeName: 'basse' }
  ]
  public showRemoveNoteModal$: Observable<boolean>;

  ngOnInit(): void {
    this.showRemoveNoteModal$ = this.store.pipe(select(removeNoteModal));
  }

  showAddEditForm() {
    this.store.dispatch(showAddEditNoteModal({ showAddEditNoteModal: true }));
    this.store.dispatch(setFormMode({ isAddMode: true }));
  }
}