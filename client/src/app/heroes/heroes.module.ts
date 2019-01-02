import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { HeroService } from "~/app/heroes/hero.service";
import { HeroesRoutingModule } from "~/app/heroes/heroes-routing.module";
import { HeroesComponent } from "~/app/heroes/heroes.component";

@NgModule({
  declarations: [HeroesComponent],
  imports: [
    NativeScriptCommonModule,
    HeroesRoutingModule
  ],
  providers: [HeroService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HeroesModule { }
