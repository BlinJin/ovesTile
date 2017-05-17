import {Routes} from "@angular/router";
import {MainComponent} from "../component/main.page/MainComponent";
import {WallpaperComponent} from "../component/wallpaper.page/WallpaperComponent";
import {FireComponent} from "../component/fire.page/FireComponent";
import {AboutComponent} from "../component/about.page/AboutComponent";
// import {BlindComponent} from "app/page.component/blind/BlindComponent";
// import {FireComponent} from "app/page.component/fire/FireComponent";
// import {TextileComponent} from "app/page.component/textile/TextileComponent";
// import {WallpaperComponent} from "app/page.component/wallpaper/WallpaperComponent";

export const ROOT_ROUTES: Routes = [
    {path: "main", component: MainComponent},
    {path: "about", component: AboutComponent},
    {path: "backform", component: MainComponent},
    {path: "blind", component: MainComponent},
    {path: "fire", component: FireComponent},
    {path: "textile", component: MainComponent},
    {path: "wallpaper", component: WallpaperComponent},
    {path: "", component: MainComponent},
    {path: "**", component: MainComponent},

    // {path: "fire", component: FireComponent},
    // {path: "textile", component: TextileComponent},
    // {path: "wallpaper", component: WallpaperComponent},
    // {path: "blind", component: BlindComponent},
];