import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component'; 
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  
  imports: [AppComponent, ContactComponent, BrowserModule, ReactiveFormsModule],
})
export class AppModule {}
