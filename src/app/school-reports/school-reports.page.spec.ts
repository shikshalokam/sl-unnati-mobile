import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchoolReportsPage } from './school-reports.page';

describe('SchoolReportsPage', () => {
  let component: SchoolReportsPage;
  let fixture: ComponentFixture<SchoolReportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolReportsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolReportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
