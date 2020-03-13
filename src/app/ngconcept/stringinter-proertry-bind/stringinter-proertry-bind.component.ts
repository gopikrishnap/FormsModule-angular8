import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinter-proertry-bind',
  templateUrl: './stringinter-proertry-bind.component.html',
  styleUrls: ['./stringinter-proertry-bind.component.css']
})
export class StringinterProertryBindComponent implements OnInit {

  StringData = 'Works ';
  StringBind = "Welcome to";
  //string binding end
  //propertry binding start
  allowNewbuttondisableneable = true;
  Prpertychange = 'enable'
  UpdateEvent = ''
  username = ''
  //propertry binding end
  constructor() {
    //propertry binding start
    setTimeout(() => {
      this.allowNewbuttondisableneable = false
    }, 2000)
    //propertry binding end
  }
  ngOnInit() {
  }
  OnCreateMetho(event: any) {
    console.log("test", event)
    this.Prpertychange = 'disabled'
  }
  UpdateInput(event: any) {
    this.UpdateEvent = event.target.value
  }

}
