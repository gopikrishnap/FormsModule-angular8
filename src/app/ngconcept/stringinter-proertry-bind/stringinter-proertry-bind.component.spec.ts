import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringinterProertryBindComponent } from './stringinter-proertry-bind.component';

describe('StringinterProertryBindComponent', () => {
  let component: StringinterProertryBindComponent;
  let fixture: ComponentFixture<StringinterProertryBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringinterProertryBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringinterProertryBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
