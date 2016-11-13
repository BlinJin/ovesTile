import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {PlatformRef} from "@angular/core";
import {EntryModule} from "./entry.module";

const platform: PlatformRef = platformBrowserDynamic();

platform.bootstrapModule(EntryModule);
