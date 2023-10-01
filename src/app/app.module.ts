import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EdwardComponent } from './edward/edward.component';
import { BranchEdwardComponent } from './branch-edward/branch-edward.component';
import { SaraNavbarComponent } from './sara-navbar/sara-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EdwardComponent,
    BranchEdwardComponent,
    SaraNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
