import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolProjectDetailPage } from './school-project-detail.page';

describe('SchoolProjectDetailPage', () => {
  let component: SchoolProjectDetailPage;
  let fixture: ComponentFixture<SchoolProjectDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolProjectDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolProjectDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
