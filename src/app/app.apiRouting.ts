import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {APIComponent} from "./components/api.component";
import {MonitorComponent} from "./components/monitor.component";

const appRoutes: Routes = [
  {
    path:'',
    component: MonitorComponent
  },
  {
    path:'api',
    component: APIComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
