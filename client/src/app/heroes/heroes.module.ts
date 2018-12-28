import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { HeroesRoutingModule } from "~/app/heroes/heroes-routing.module";
import { HeroesComponent } from "~/app/heroes/heroes.component";

@NgModule({
  declarations: [HeroesComponent],
  imports: [
    NativeScriptCommonModule,
    HeroesRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HeroesModule { }
