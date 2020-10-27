import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSteamComponent } from './header-steam.component';

describe('HeaderSteamComponent', () => {
  let component: HeaderSteamComponent;
  let fixture: ComponentFixture<HeaderSteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
