import { Routes } from '@angular/router';
import { LandingPageComponent } from '@modules/landing-page/components/landing-page/landing-page.component';
import { LoginComponent } from '../auth/components/login/login.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: '*', redirectTo: '', pathMatch: 'full' }
];

