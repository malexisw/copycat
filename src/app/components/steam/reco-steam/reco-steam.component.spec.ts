import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoSteamComponent } from './reco-steam.component';

describe('RecoSteamComponent', () => {
  let component: RecoSteamComponent;
  let fixture: ComponentFixture<RecoSteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoSteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoSteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
