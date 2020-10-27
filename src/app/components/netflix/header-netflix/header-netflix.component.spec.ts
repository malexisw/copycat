import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNetflixComponent } from './header-netflix.component';

describe('HeaderNetflixComponent', () => {
  let component: HeaderNetflixComponent;
  let fixture: ComponentFixture<HeaderNetflixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNetflixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNetflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
