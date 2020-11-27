import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearningResourcesPage } from './learning-resources.page';

describe('LearningResourcesPage', () => {
  let component: LearningResourcesPage;
  let fixture: ComponentFixture<LearningResourcesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningResourcesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearningResourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
