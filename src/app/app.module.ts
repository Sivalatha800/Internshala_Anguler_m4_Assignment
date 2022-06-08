import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcomponentComponent } from './acomponent/acomponent.component';
import { BcomponentComponent } from './bcomponent/bcomponent.component';
import { CcomponentComponent } from './ccomponent/ccomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    AcomponentComponent,
    BcomponentComponent,
    CcomponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
