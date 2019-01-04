import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { MessageService } from "../messages/message.service";
import { IHero } from "./hero";
import { HEROES } from "./mock-heroes";

@Injectable()
export class HeroService {
  baseUrl: string = "http://10.0.2.2:3000";

  constructor(private messageService: MessageService,
              private http: HttpClient) { }

  getHeroes() {
    // this.get_products();

    return this.http.get<any>(this.baseUrl + "/api/heroes");
  }

  get_products() {
    this.http.get(this.baseUrl + "/api/heroes").subscribe((res) => {
      console.log(res);
    });
  }

  getHero(id: number): IHero {
    this.messageService.add(`HeroService: fetched hero id=${id}`);

    return HEROES.find((hero) => hero.id === id);
  }

  trackByHeroID(index: number, hero: any): number {
    return hero.id;
  }
}
