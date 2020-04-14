import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-leadinfo-details',
  templateUrl: './leadinfo-details.component.html',
  styleUrls: ['./leadinfo-details.component.css']
})
export class LeadinfoDetailsComponent implements OnInit {
  public LeadData :any= {
    FullName: '',
    MobileNumber: '',
    Mgender: '',
    Address: '',
    Address1: '',
    Address2: '',
    Dob: '',
    age: '',
    PanCard: '',
    AadharNumber: '',
    Occupation: '',
    Income: ''
  };
  public genders=[{ Gender:"Male"},{Gender:"Female"}]
  // public genders = ["Male", "Female"]
  constructor(private serviceData: AppService) { }
  public leadid = "30375"
  public OccupationsList = []
  public IncomesList = []
  // 30369
  // 30366
  ngOnInit() {
    this.LeadDataList()
  }
  LeadDataList() {
    this.serviceData.LeadData(this.leadid).subscribe((respose: any) => {
      console.log("lead Data resoonse----------->", respose)
      this.IncomesList.push({ income: respose.Data.Income})
      this.OccupationsList.push(respose.Data.Occupation)
      this.IncomesList.push(respose.Data.Gender);
      this.LeadData.Mgender = respose.Data.Gender
      this.LeadData.Occupation=respose.Data.Occupation
      this.LeadData.Income=respose.Data.Income

    }, (err) => {
      console.log(err)
    })

  }

  onSubmitForm(data :any){
    console.log("leadindo testt--------------->",this.LeadData)

  }
}
