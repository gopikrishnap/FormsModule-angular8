import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesdriveComponent } from './salesdrive.component';

describe('SalesdriveComponent', () => {
  let component: SalesdriveComponent;
  let fixture: ComponentFixture<SalesdriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesdriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesdriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
