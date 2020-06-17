import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateViewPage } from './template-view.page';

describe('TemplateViewPage', () => {
  let component: TemplateViewPage;
  let fixture: ComponentFixture<TemplateViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
