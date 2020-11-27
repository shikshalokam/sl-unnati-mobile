import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectOperationPage } from './project-operation.page';

describe('ProjectOperationPage', () => {
  let component: ProjectOperationPage;
  let fixture: ComponentFixture<ProjectOperationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectOperationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectOperationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
