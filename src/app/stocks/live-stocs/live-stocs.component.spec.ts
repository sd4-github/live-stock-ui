import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStocsComponent } from './live-stocs.component';

describe('LiveStocsComponent', () => {
  let component: LiveStocsComponent;
  let fixture: ComponentFixture<LiveStocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveStocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveStocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
