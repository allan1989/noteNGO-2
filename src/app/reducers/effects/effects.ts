import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect  } from "@ngrx/effects";
import { catchError, mergeMap, map, delay } from 'rxjs/operators';
import { checkLocalStorage, checkLocalStorageSuccess, showAddEditNoteToast } from '../actions/actions';
import { NoteService } from "src/services/note.service";
import { EmptyError, Observable, of } from "rxjs";

@Injectable()
export class LocalStorageEffect {

  constructor(
    private actions$ : Actions,
    private noteService: NoteService
  ){}

  localStorage$ = createEffect(
    () => this.actions$.pipe(
      ofType(checkLocalStorage),
      mergeMap(() => this.noteService.checkIfLocalStorageExists()
      .pipe(
        map((response) => checkLocalStorageSuccess({canUseLocalStorage: response.canUse, data: response.notes}))
      ))
    )
  )
}