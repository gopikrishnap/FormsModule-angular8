import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-more-less',
  templateUrl: './search-more-less.component.html',
  styleUrls: ['./search-more-less.component.css']
})
export class SearchMoreLessComponent implements OnInit {
public showcisible = false;

  constructor() { }

  ngOnInit() {
  }
  myFunction(event){
    this.showcisible=!this.showcisible
console.log(event)}

}
