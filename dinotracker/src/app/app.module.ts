import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DinolistComponent } from './dinolist/dinolist.component';
import { MatTableModule } from '@angular/material/table';
import { DinoAddComponent } from './dino-add/dino-add.component';

@NgModule({
  declarations: [
    AppComponent,
    DinolistComponent,
    DinoAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
