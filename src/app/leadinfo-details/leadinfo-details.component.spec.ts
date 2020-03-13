import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadinfoDetailsComponent } from './leadinfo-details.component';

describe('LeadinfoDetailsComponent', () => {
  let component: LeadinfoDetailsComponent;
  let fixture: ComponentFixture<LeadinfoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadinfoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadinfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
