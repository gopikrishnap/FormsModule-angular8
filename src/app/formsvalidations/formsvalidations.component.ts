import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';
@Component({
  selector: 'app-formsvalidations',
  templateUrl: './formsvalidations.component.html',
  styleUrls: ['./formsvalidations.component.css']
})
export class FormsvalidationsComponent implements OnInit {

  public isValid : boolean = false;

   registerForm : FormGroup
 public expression: boolean =false;
  constructor(
    public appService : AppService,
    public router : Router,
    private fb:FormBuilder,
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName : [null,[Validators.required]],
      lastName : [null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]],
      password:[null, [Validators.required,Validators.minLength(8)]],
      mobileNumber:[null, [Validators.required]]
      
    })
    console.log(this.registerForm,"formdeatils")
    // this.registerForm.controls["firstName"].disable()
    // this.form.controls['name'].disable();

  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  onSignup() {
    this.isValid = true;
    if(this.registerForm.valid)
    this.appService.registerData(this.registerForm.value)
    .subscribe(
      (response)=>{
        console.log(response);
        this.router.navigate(['/login'])
        
      }
    )
  }

}
