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

}



