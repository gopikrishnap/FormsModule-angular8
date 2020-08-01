import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleClassComponent } from './ng-style-class.component';

describe('NgStyleClassComponent', () => {
  let component: NgStyleClassComponent;
  let fixture: ComponentFixture<NgStyleClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStyleClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//[,,"10:30am","11:00am","11:30am"]
//["Call Aayush sharma",,,,]
// [
//   {
//     "calltimes": "9:30am",
//     "PersonsNames": "Call Aayush sharma"
//   },
//    {
//     "calltimes": "10:00am",
//     "PersonsNames": "Mail Badal Goswami"
//   },
//    {
//     "calltimes": "10:30am",
//     "PersonsNames": "WhatsApp SMS Chirag Kulkarni"
//   },
//    {
//     "calltimes": "11:00am",
//     "PersonsNames": "SMS Divyansh Mahajan"
//   },
//    {
//     "calltimes": "11:30am",
//     "PersonsNames": "WhatsApp Call Chirag Kulkarni"
//   },
  
// ]