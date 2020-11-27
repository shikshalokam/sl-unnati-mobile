import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialVideosComponent } from './tutorial-videos.component';

describe('TutorialVideosComponent', () => {
  let component: TutorialVideosComponent;
  let fixture: ComponentFixture<TutorialVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialVideosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
