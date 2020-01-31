import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBoardPage } from './task-board.page';

describe('TaskBoardPage', () => {
  let component: TaskBoardPage;
  let fixture: ComponentFixture<TaskBoardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskBoardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
