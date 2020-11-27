import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemplateViewPage } from './template-view.page';

describe('TemplateViewPage', () => {
  let component: TemplateViewPage;
  let fixture: ComponentFixture<TemplateViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
