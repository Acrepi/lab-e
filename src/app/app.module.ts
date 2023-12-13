import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { AddPersonComponentComponent } from './add-person-component/add-person-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    DetailsComponentComponent,
    AddPersonComponentComponent,
    NotFoundComponentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
