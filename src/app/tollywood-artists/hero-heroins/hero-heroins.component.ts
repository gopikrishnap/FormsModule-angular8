import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-heroins',
  templateUrl: './hero-heroins.component.html',
  styleUrls: ['./hero-heroins.component.css']
})
export class HeroHeroinsComponent implements OnInit {
  public DynamicRouting: any;

  heroheroin: any;
  heroheroins: any;
  public id: any;
  constructor(private activateroute: ActivatedRoute) { }

  ngOnInit() {
    this.heroheroins = [{
      hero: "Prabhas",
      id: "1",
      Movie: "Baahubali"
    }, {
      hero: "Mahesh",
      id: "2",
      Movie: "Srimanthudu"

    }, {
      hero: "Ramcharan",
      id: "3",
      Movie: "Magadheera"
    }]
    this.DynamicRouting = this.activateroute.params.subscribe((param) => {
      return this.id = param['id']
    })
    console.log("Tollywood id-------->", this.id);
    this.data()
  }

  data() {
    this.heroheroins.forEach(heroheroin => {
      if (heroheroin.id == this.id) {
        this.heroheroins = heroheroin;
        console.log(heroheroin)
      }
    });
  }
  ngOnDestroy(){
    this.DynamicRouting.unsubscribe()
  }
}
