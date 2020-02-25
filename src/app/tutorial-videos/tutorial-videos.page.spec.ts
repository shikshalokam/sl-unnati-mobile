import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialVideosPage } from './tutorial-videos.page';

describe('TutorialVideosPage', () => {
  let component: TutorialVideosPage;
  let fixture: ComponentFixture<TutorialVideosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialVideosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialVideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
