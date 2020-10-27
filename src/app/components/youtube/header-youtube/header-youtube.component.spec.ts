import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderYoutubeComponent } from './header-youtube.component';

describe('HeaderYoutubeComponent', () => {
  let component: HeaderYoutubeComponent;
  let fixture: ComponentFixture<HeaderYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
