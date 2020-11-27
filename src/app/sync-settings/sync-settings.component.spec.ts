import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SyncSettingsComponent } from './sync-settings.component';

describe('SyncSettingsComponent', () => {
  let component: SyncSettingsComponent;
  let fixture: ComponentFixture<SyncSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncSettingsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SyncSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
