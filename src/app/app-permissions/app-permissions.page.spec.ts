import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPermissionsPage } from './app-permissions.page';

describe('AppPermissionsPage', () => {
  let component: AppPermissionsPage;
  let fixture: ComponentFixture<AppPermissionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPermissionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPermissionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
