import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSubEntitiesPage } from './get-sub-entities.page';

describe('GetSubEntitiesPage', () => {
  let component: GetSubEntitiesPage;
  let fixture: ComponentFixture<GetSubEntitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSubEntitiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSubEntitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
