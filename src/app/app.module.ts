import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module'; 


import axios from 'axios';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    CoreModule,
    SharedModule, 
    
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
