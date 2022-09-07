import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concat, Observable, of } from 'rxjs';
import { map, mergeMap, catchError, delay, switchMap, concatMap, concatAll } from 'rxjs/operators';
import { NoteService } from "src/services/note.service";
//import { showHideNoteToast, showAddEditNoteToastSuccess, hideAddEditNoteToastSuccess } from "../actions/actions";
import { Store } from "@ngrx/store";

@Injectable()
export class noteEffects {

  // showNoteToast$ = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(showHideNoteToast),
  //     switchMap(() => this.noteService.showAddEditNoteToast()
  //       .pipe(
  //         map(() => (this.store.dispatch(showAddEditNoteToastSuccess())))
  //       )
  //     )
  //   )
  // )


  constructor(
    private action$: Actions,
    private noteService: NoteService,
    private store: Store
  ) { }
}