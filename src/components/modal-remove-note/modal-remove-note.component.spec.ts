import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRemoveNoteComponent } from './modal-remove-note.component';

describe('ModalRemoveNoteComponent', () => {
  let component: ModalRemoveNoteComponent;
  let fixture: ComponentFixture<ModalRemoveNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRemoveNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRemoveNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
