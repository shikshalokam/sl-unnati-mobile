import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskViewPage } from './task-view.page';

describe('TaskViewPage', () => {
  let component: TaskViewPage;
  let fixture: ComponentFixture<TaskViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
