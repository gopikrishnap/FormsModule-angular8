import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,ParamMap} from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  public schools = [{
    schoolName: "Tejaswi hight school",
    SchoolRank: "1"
  },
  {
    schoolName: "Gopi hight school",
    SchoolRank: "2"
  },
  {
    schoolName: "Vidhyabarthi hight school",
    SchoolRank: "3"
  }]

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // let id = this.router.snapshot.paramMap.get('id');

  }
  selectSchool(schools) {
    console.log(schools)


  }
}
