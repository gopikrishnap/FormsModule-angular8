import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormgroupComponent } from './nested-formgroup.component';

describe('NestedFormgroupComponent', () => {
  let component: NestedFormgroupComponent;
  let fixture: ComponentFixture<NestedFormgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedFormgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFormgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
