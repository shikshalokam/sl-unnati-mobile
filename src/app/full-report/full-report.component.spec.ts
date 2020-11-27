import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FullReportComponent } from './full-report.component';

describe('FullReportComponent', () => {
  let component: FullReportComponent;
  let fixture: ComponentFixture<FullReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullReportComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FullReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
