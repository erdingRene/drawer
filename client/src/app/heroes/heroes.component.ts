import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import * as app from "tns-core-modules/application";
import { IHero } from "~/app/heroes/hero";
import { HeroService } from "~/app/heroes/hero.service";

class Hero {
  constructor(public superHero: IHero) { }
}

@Component({
  selector: "Heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
  moduleId: module.id,
  providers: [HeroService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesComponent implements OnInit {
  heroItems: Hero[];
  heroes: IHero[] = [];
  listOfHeroes: IHero[] = [
    { id: 11, name: "Mr. Bad" },
    { id: 12, name: "Narco" },
    { id: 13, name: "Bombasto" },
    { id: 14, name: "Celeritas" },
    { id: 15, name: "Magneta" },
    { id: 16, name: "RubberMan" },
    { id: 17, name: "Dynama" },
    { id: 18, name: "Dr IQ" },
    { id: 19, name: "Magma" },
    { id: 20, name: "Tornado" }
  ];
  private heroSubs: Subscription;

  constructor(private heroService: HeroService) {
    this.heroService.getHeroes().subscribe((val: IHero[]) => {
      this.heroes = val;
      console.log("IN");
      console.log(this.heroes);
    });
    console.log("OUT");
    console.log(this.heroes);
    this.heroItems = [];
    for (let i = 0; i < this.listOfHeroes.length; i++) {
      this.heroItems.push(new Hero(this.listOfHeroes[i]));
    }
  }
  ngOnInit(): void {

  }

  getHeroes(): void {
    this.heroSubs = this.heroService.getHeroes().subscribe((heroes) => this.heroes = heroes, (e) => {
      console.error(e);
    });
  }

  trackByHeroID(index: number, hero: any): number {
    return hero.id;
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

}
