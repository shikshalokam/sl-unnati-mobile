import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtaskViewPage } from './subtask-view.page';

describe('SubtaskViewPage', () => {
  let component: SubtaskViewPage;
  let fixture: ComponentFixture<SubtaskViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtaskViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtaskViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
