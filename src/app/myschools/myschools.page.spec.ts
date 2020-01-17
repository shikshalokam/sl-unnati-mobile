import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyschoolsPage } from './myschools.page';

describe('MyschoolsPage', () => {
  let component: MyschoolsPage;
  let fixture: ComponentFixture<MyschoolsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyschoolsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyschoolsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
