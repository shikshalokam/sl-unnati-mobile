import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTaskReportPage } from './school-task-report.page';

describe('SchoolTaskReportPage', () => {
  let component: SchoolTaskReportPage;
  let fixture: ComponentFixture<SchoolTaskReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolTaskReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolTaskReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
