import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LibrarySearchComponent } from './library-search.component';

describe('LibrarySearchComponent', () => {
  let component: LibrarySearchComponent;
  let fixture: ComponentFixture<LibrarySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarySearchComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LibrarySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
