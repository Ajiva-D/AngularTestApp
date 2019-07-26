import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { BehaviorSubject } from "rxjs";


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
			console.log(res);
			this.heroPost = res;
			this.hero.getImg().subscribe(resp =>{
			
			
				
				
					this.heroPost.map((current,index)=> {
						current.img = resp[index].url
						
					});
	
// console.log(this.heroPost)

			})
		})
		
			
		
			// console.log(this.heroPost);
	
  }

}
