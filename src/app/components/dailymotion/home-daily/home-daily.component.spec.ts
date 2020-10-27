import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDailyComponent } from './home-daily.component';

describe('HomeDailyComponent', () => {
  let component: HomeDailyComponent;
  let fixture: ComponentFixture<HomeDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
