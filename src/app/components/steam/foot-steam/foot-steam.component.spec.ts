import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootSteamComponent } from './foot-steam.component';

describe('FootSteamComponent', () => {
  let component: FootSteamComponent;
  let fixture: ComponentFixture<FootSteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootSteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootSteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
