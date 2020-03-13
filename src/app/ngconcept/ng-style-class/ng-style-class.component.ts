import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-class',
  templateUrl: './ng-style-class.component.html',
  styleUrls: ['./ng-style-class.component.css']
})
export class NgStyleClassComponent implements OnInit {

  Ngifveriable=false;
  NgModel='';
  TestMsg=''
  data='';
  servers=[]
  constructor() { }

  ngOnInit() {
  }
  OnclckServer(){
    this.Ngifveriable=true;
   this.TestMsg=this.NgModel
   this.servers.push(this.TestMsg)
  }

}
