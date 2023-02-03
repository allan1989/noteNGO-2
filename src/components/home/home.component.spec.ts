import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Initialstate } from 'src/app/reducers';
import { HomeComponent } from './home.component';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;
  let store: MockStore;
  const initialState = Initialstate;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        provideMockStore({ initialState })
      ],
      imports: [RouterTestingModule.withRoutes([])],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates component', () => {
    expect(component).toBeTruthy();
  });

  it('renders the left panel with the 4 priorities', () => {
    const panels = fixture.debugElement.queryAll(By.css('.list-group-item'));
    expect(panels.length).toEqual(4);
  })

  it('renders the AddEditNoteModal component', () => {
    const addEditNoteModalComponent = fixture.debugElement.query(By.css('app-modal-add-edit-note'));
    expect(addEditNoteModalComponent).toBeTruthy();
  });

  it('renders the Toast component', () => {
    const toastComponent = fixture.debugElement.query(By.css('app-toast'));
    expect(toastComponent).toBeTruthy();
  });

  it('renders the removeNote component', () => {
    const removeNoteComponent = fixture.debugElement.query(By.css('app-modal-remove-note'));
    expect(removeNoteComponent).toBeTruthy();
  });

});
