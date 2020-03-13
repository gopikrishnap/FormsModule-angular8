import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgconceptComponent } from './ngconcept.component';

describe('NgconceptComponent', () => {
  let component: NgconceptComponent;
  let fixture: ComponentFixture<NgconceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgconceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgconceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
