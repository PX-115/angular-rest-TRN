import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [AppComponent, CardsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [HttpClientModule, CardsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
