import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-for',
  templateUrl: './ng-if-for.component.html',
  styleUrls: ['./ng-if-for.component.css']
})
export class NgIfForComponent implements OnInit {

  public NgIfShow = false;
  public NgModel = '';
  public users = [];
  public username = ''
  public color = 'reddd'
  constructor() { }

  ngOnInit() {
  }
  Ngiffunction() {
    this.NgIfShow = true;
  }
  NgForfunction() {
    this.users.push({ name: this.NgModel })
  }
  NgForfunctionReset() {
    // this.NgModel='';
    this.users = [];
    // this.username=''
  }

}
