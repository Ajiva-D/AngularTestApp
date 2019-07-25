import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	heroPost:any;
	image:any;

  constructor(private hero: HeroService) { }

  ngOnInit() {
		this.hero.getData().subscribe( res => {
			this.heroPost = res;
			console.log(res);
		})
		this.hero.getImg().subscribe(res =>{
			this.image = res;
		})
  }

}
