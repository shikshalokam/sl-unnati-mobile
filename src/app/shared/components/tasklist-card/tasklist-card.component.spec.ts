import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TasklistCardComponent } from './tasklist-card.component';

describe('TasklistCardComponent', () => {
  let component: TasklistCardComponent;
  let fixture: ComponentFixture<TasklistCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasklistCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TasklistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
