import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSteamComponent } from './home-steam.component';

describe('HomeSteamComponent', () => {
  let component: HomeSteamComponent;
  let fixture: ComponentFixture<HomeSteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
