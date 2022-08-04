import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddEditNoteComponent } from './modal-add-edit-note.component';

describe('ModalAddEditNoteComponent', () => {
  let component: ModalAddEditNoteComponent;
  let fixture: ComponentFixture<ModalAddEditNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddEditNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddEditNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
