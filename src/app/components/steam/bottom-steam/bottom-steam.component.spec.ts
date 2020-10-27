import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSteamComponent } from './bottom-steam.component';

describe('BottomSteamComponent', () => {
  let component: BottomSteamComponent;
  let fixture: ComponentFixture<BottomSteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
