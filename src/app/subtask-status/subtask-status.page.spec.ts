import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtaskStatusPage } from './subtask-status.page';

describe('SubtaskStatusPage', () => {
  let component: SubtaskStatusPage;
  let fixture: ComponentFixture<SubtaskStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtaskStatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtaskStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
