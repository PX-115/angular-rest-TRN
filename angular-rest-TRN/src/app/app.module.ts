import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [AppComponent, CardsComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule] ,
  providers: [HttpClientModule, CardsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
