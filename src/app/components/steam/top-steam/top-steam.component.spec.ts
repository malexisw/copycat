import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSteamComponent } from './top-steam.component';

describe('TopSteamComponent', () => {
  let component: TopSteamComponent;
  let fixture: ComponentFixture<TopSteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
