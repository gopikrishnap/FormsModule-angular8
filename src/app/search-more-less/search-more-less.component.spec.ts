import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMoreLessComponent } from './search-more-less.component';

describe('SearchMoreLessComponent', () => {
  let component: SearchMoreLessComponent;
  let fixture: ComponentFixture<SearchMoreLessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMoreLessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMoreLessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
