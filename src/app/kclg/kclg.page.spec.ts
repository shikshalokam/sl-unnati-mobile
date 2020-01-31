import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KclgPage } from './kclg.page';

describe('KclgPage', () => {
  let component: KclgPage;
  let fixture: ComponentFixture<KclgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KclgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KclgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
