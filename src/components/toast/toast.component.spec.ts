import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ToastComponent } from './toast.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Initialstate } from '../../app/reducers/index';
import { showAddEditNoteModal } from 'src/app/reducers/actions/actions';


describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;
  let store: MockStore;
  const initialState = Initialstate;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastComponent],
      providers: [
        provideMockStore({ initialState })
      ]
    })
      .compileComponents();
    store = TestBed.inject(MockStore)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Toast component ', fakeAsync(() => {
    store.dispatch(showAddEditNoteModal({ showAddEditNoteModal: true }));
    tick();
    expect(component).toBeTruthy();
  }));
});
