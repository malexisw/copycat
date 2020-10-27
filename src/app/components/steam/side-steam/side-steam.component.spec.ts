import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSteamComponent } from './side-steam.component';

describe('SideSteamComponent', () => {
  let component: SideSteamComponent;
  let fixture: ComponentFixture<SideSteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideSteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideSteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
