import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component'; 

@NgModule({
  imports: [AppComponent, ContactComponent, BrowserModule, ReactiveFormsModule],
})
export class AppModule {}
