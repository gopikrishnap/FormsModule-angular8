import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
public genders=['Male','Female'];
public isValid : boolean = false;

public UserData ={
  Firstname:'',
  Lastname:'',
  Age:'',
  Mgender:'',
  number:'',
  father:'',
  mother:'',
  email:'',
  id:''
}
public loginuser : any ;
  constructor(private appservice :AppService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onSubmitForm(from:NgForm){
console.log(from)
if (this.UserData.Age == "" && this.UserData.Firstname=="" && this.UserData.Lastname=="" && this.UserData.Mgender=="" && this.UserData.father=="" && this.UserData.mother=="" && this.UserData.email==""){
  alert("Please enter ALL fields")  

  // this.appservice.Templatedservie(this.UserData).subscribe((res:any)=>{
  //   console.log(res)
  //   this.employyelist=res
  //   },
  //   (err)=>{
  //     alert(err)
  //   })


  // this.Loginform.post('').subscribe((Response)=>{

  // })

}else{
  alert("Details submited to succesfully");
  this.appservice.Templatedservie(this.UserData).subscribe((res:any)=>{
    this.UserData=res
    
       console.log(res,"<-----------tempdata")
       localStorage.setItem("USER_DATA", JSON.stringify(this.UserData))
      //  localStorage.setItem('userId', this.loginuser.user._id);
      this.router.navigate(['/dropdown/school'])
  },
  (err)=>{console.log(err,"<-----------error") })
  
}
  }
}
