import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDailyComponent } from './header-daily.component';

describe('HeaderDailyComponent', () => {
  let component: HeaderDailyComponent;
  let fixture: ComponentFixture<HeaderDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
