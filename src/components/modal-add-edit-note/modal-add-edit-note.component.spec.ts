// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ModalAddEditNoteComponent } from './modal-add-edit-note.component';
// import { NoteService } from 'src/services/note.service';
// import { MockStore, provideMockStore } from '@ngrx/store/testing';
// import { Initialstate } from 'src/app/reducers';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
// import { of } from 'rxjs';

// describe('ModalAddEditNoteComponent', () => {
//   let component: ModalAddEditNoteComponent;
//   let fixture: ComponentFixture<ModalAddEditNoteComponent>;
//   let store: MockStore;
//   let service: NoteService;
//   const initialState = Initialstate;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ModalAddEditNoteComponent],
//       providers: [

//         provideMockStore({ initialState }),

//       ],
//       imports: [ReactiveFormsModule],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA]
//     })
//       .compileComponents();
//     service = TestBed.inject(NoteService)
//     store = TestBed.inject(MockStore)
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ModalAddEditNoteComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('create component', () => {

//     expect(component).toBeTruthy();
//   });

//   it('creates NoteService', () => {
//     expect(service).toBeTruthy();
//   });
// });
