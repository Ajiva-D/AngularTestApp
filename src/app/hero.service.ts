import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HeroService {
	api:string = 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10';
	imgApi:string = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10';
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(this.api);
	}
	getImg(){
		return this.http.get(this.imgApi);
	}
}
