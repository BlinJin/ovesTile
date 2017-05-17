"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainComponent_1 = require("../component/main.page/MainComponent");
var WallpaperComponent_1 = require("../component/wallpaper.page/WallpaperComponent");
var FireComponent_1 = require("../component/fire.page/FireComponent");
var AboutComponent_1 = require("../component/about.page/AboutComponent");
// import {BlindComponent} from "app/page.component/blind/BlindComponent";
// import {FireComponent} from "app/page.component/fire/FireComponent";
// import {TextileComponent} from "app/page.component/textile/TextileComponent";
// import {WallpaperComponent} from "app/page.component/wallpaper/WallpaperComponent";
exports.ROOT_ROUTES = [
    { path: "main", component: MainComponent_1.MainComponent },
    { path: "about", component: AboutComponent_1.AboutComponent },
    { path: "backform", component: MainComponent_1.MainComponent },
    { path: "blind", component: MainComponent_1.MainComponent },
    { path: "fire", component: FireComponent_1.FireComponent },
    { path: "textile", component: MainComponent_1.MainComponent },
    { path: "wallpaper", component: WallpaperComponent_1.WallpaperComponent },
    { path: "", component: MainComponent_1.MainComponent },
    { path: "**", component: MainComponent_1.MainComponent },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0VBQW1FO0FBQ25FLHFGQUFrRjtBQUNsRixzRUFBbUU7QUFDbkUseUVBQXNFO0FBQ3RFLDBFQUEwRTtBQUMxRSx1RUFBdUU7QUFDdkUsZ0ZBQWdGO0FBQ2hGLHNGQUFzRjtBQUV6RSxRQUFBLFdBQVcsR0FBVztJQUMvQixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDZCQUFhLEVBQUM7SUFDeEMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSwrQkFBYyxFQUFDO0lBQzFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsNkJBQWEsRUFBQztJQUM1QyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLDZCQUFhLEVBQUM7SUFDekMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw2QkFBYSxFQUFDO0lBQ3hDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsNkJBQWEsRUFBQztJQUMzQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHVDQUFrQixFQUFDO0lBQ2xELEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNkJBQWEsRUFBQztJQUNwQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLDZCQUFhLEVBQUM7Q0FNekMsQ0FBQyJ9