import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialSteamComponent } from './special-steam.component';

describe('SpecialSteamComponent', () => {
  let component: SpecialSteamComponent;
  let fixture: ComponentFixture<SpecialSteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialSteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialSteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
