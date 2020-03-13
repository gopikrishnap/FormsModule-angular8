import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  public sigupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.sigupForm = new FormGroup({
      'UserData': new FormGroup({
        'Password': new FormControl(null, Validators.required),
        'Email': new FormControl(null, [Validators.required, Validators.email]),
        'MobileNumber': new FormControl(null, Validators.required)
      }),

      "hobbies": new FormArray([])

    })
  }
  ReactiveFormSubmit() {
    console.log(this.sigupForm)
    console.log(this.sigupForm.value)


    
  }
  Hobbies() {
    const Data = new FormControl(null,Validators.required);
    (<FormArray>this.sigupForm.get('hobbies')).push(Data)
  }


}
