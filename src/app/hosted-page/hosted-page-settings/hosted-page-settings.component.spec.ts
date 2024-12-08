import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostedPageSettingsComponent } from './hosted-page-settings.component';

describe('HostedPageSettingsComponent', () => {
  let component: HostedPageSettingsComponent;
  let fixture: ComponentFixture<HostedPageSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostedPageSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostedPageSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
