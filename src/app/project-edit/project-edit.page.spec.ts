import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectEditPage } from './project-edit.page';

describe('ProjectEditPage', () => {
  let component: ProjectEditPage;
  let fixture: ComponentFixture<ProjectEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
