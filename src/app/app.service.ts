import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  Templatedservie(data) {
    console.log(environment.api_URL, "Environment")
    return this.http.post(environment.api_URL + '/users', data)
  }
  getdata() {
    return this.http.get("http://www.omdbapi.com/?i=tt3896198&apikey=a9e6f133&s=batman&page=1")
  }
  movieData() {
    return this.http.get("http://www.omdbapi.com/?i=tt3896198&apikey=a9e6f133&s=batman&page=2")
  }
  LeadData(Lead_Id) {
    return this.http.get("http://lifelineuat.reliancelife.com/RassistServices/wsLeadActivityPlanningF2F.svc" + Lead_Id)
  }
  registerData(postData) {
    return this.http.post(environment.api_URL + "/api/register", postData)

  }
}



