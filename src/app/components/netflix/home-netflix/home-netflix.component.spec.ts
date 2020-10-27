import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNetflixComponent } from './home-netflix.component';

describe('HomeNetflixComponent', () => {
  let component: HomeNetflixComponent;
  let fixture: ComponentFixture<HomeNetflixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNetflixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNetflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
