import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 public mytest={id:''}
 public items=[]
 //public div = document.getElementById('myid'); 
  constructor() { }

  ngOnInit() {
  }
  removeQuantity(){
    this.items.push(this.mytest.id)
  }

  remove(i){
    console.log(i)
    let d= document.getElementById('myid'); 
    console.log(this.items)
   this.items.splice(i, 1);
   console.log(this.items,"remove")
  }
}
