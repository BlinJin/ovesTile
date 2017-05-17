"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var AppComponent_1 = require("../component/root.page/AppComponent");
var Routes_1 = require("../routes/Routes");
exports.routing = router_1.RouterModule.forRoot(Routes_1.ROOT_ROUTES);
var EntryModule = (function () {
    function EntryModule() {
    }
    return EntryModule;
}());
EntryModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            exports.routing
        ],
        declarations: [
            AppComponent_1.AppComponent
        ],
        bootstrap: [AppComponent_1.AppComponent]
    })
], EntryModule);
exports.EntryModule = EntryModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW50cnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQWlFO0FBQ2pFLDhEQUEwRDtBQUUxRCx3Q0FBMkM7QUFDM0Msc0NBQXlDO0FBQ3pDLDBDQUE2QztBQUM3QyxvRUFBaUU7QUFJakUsMkNBQTZDO0FBSWhDLFFBQUEsT0FBTyxHQUF3QixxQkFBWSxDQUFDLE9BQU8sQ0FBQyxvQkFBVyxDQUFDLENBQUM7QUFjOUUsSUFBYSxXQUFXO0lBQXhCO0lBQTJCLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFBNUIsSUFBNEI7QUFBZixXQUFXO0lBWnZCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNMLGdDQUFhO1lBQ2IsbUJBQVc7WUFDWCxpQkFBVTtZQUNWLGVBQU87U0FDVjtRQUNELFlBQVksRUFBRTtZQUNWLDJCQUFZO1NBQ2Y7UUFDRCxTQUFTLEVBQUssQ0FBRSwyQkFBWSxDQUFFO0tBQy9CLENBQUM7R0FDVyxXQUFXLENBQUk7QUFBZixrQ0FBVyJ9