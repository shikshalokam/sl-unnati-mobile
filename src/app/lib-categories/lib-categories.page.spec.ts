import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LibCategoriesPage } from './lib-categories.page';

describe('LibCategoriesPage', () => {
  let component: LibCategoriesPage;
  let fixture: ComponentFixture<LibCategoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibCategoriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LibCategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
