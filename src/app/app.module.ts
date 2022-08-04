import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { HomeModule } from 'src/components/home/home.module';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { notesReducer } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { LocalStorageEffect } from './reducers/effects/effects';
import { Initialstate } from './reducers';

// save into localStorage
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state = Initialstate, action) {
    if(state.notes) {
      localStorage.setItem('notes', JSON.stringify(state.notes.data));
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    StoreModule.forRoot( {notes: notesReducer }, {metaReducers}),
    EffectsModule.forRoot([LocalStorageEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
