import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EdwardComponent } from './edward/edward.component';
import { BranchEdwardComponent } from './branch-edward/branch-edward.component';
import { SaraNavbarComponent } from './sara-navbar/sara-navbar.component';
import { CartComponent } from './Component/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    EdwardComponent,
    BranchEdwardComponent,
    SaraNavbarComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
