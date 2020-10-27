import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDailyComponent } from './footer-daily.component';

describe('FooterDailyComponent', () => {
  let component: FooterDailyComponent;
  let fixture: ComponentFixture<FooterDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
