import {NgModule, ModuleWithProviders}      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {AppComponent} from "../component/root.page/AppComponent";
import {HeaderComponent} from "../component/header/HeaderComponent";
import {AboutComponent} from "../component/about.page/AboutComponent";
import {MainComponent} from "../component/main.page/MainComponent";
import {ROOT_ROUTES} from "../routes/Routes";
import {FireComponent} from "../component/fire.page/FireComponent";
import {WallpaperComponent} from "../component/wallpaper.page/WallpaperComponent";

export const routing: ModuleWithProviders = RouterModule.forRoot(ROOT_ROUTES);

@NgModule({
  imports: [ 
      BrowserModule,
      FormsModule,
      HttpModule,
      routing
  ],
  declarations: [ 
      AppComponent,
      HeaderComponent,
      AboutComponent,
      MainComponent,
      FireComponent,
      WallpaperComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class EntryModule { }
