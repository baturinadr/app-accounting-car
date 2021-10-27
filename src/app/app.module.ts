import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";


// Modules
import {AppRoutingModule} from './app-routing.module';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";

// Components
import {AppComponent} from './app.component';

// Services
import {CarOwnersService} from "./services/car-owners.service";

// API
import {InMemoryDataService} from "./in-memory-data.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [CarOwnersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
