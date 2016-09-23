import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComponenteAngular2Component } from './componente-angular2/componente-angular2.component';
import { OtroComponenteComponent } from './otro-componente/otro-componente.component';
import { TercerComponenteComponent } from './tercer-componente/tercer-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteAngular2Component,
    OtroComponenteComponent,
    TercerComponenteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
