import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtasksPage } from './subtasks.page';

describe('SubtasksPage', () => {
  let component: SubtasksPage;
  let fixture: ComponentFixture<SubtasksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtasksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
