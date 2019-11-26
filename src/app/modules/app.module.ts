import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from '@modules/app-routing/app-routing.module';
import { AuthModule } from '@modules/auth/auth.module';
import { ExpenseManagerModule } from '@modules/expense-manager/expense-manager.module';
import { LandingPageModule } from '@modules/landing-page/landing-page.module';
import { StoreModule } from '@modules/store/store.module';
import { UiModule } from '@modules/ui/ui.module';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    ExpenseManagerModule,
    LandingPageModule,
    StoreModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
