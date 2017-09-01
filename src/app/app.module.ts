import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MonitorComponent} from './components/monitor.component';
import {APIComponent} from './components/api.component';
import {routing} from './app.apiRouting';

@NgModule({
  declarations: [
    AppComponent,
    MonitorComponent,
    APIComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
