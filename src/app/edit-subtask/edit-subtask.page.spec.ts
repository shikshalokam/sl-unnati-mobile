import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubtaskPage } from './edit-subtask.page';

describe('EditSubtaskPage', () => {
  let component: EditSubtaskPage;
  let fixture: ComponentFixture<EditSubtaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubtaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubtaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
