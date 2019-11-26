import { Routes } from '@angular/router';
import { LandingPageComponent } from '@modules/landing-page/components/landing-page/landing-page.component';
import { LoginComponent } from '@modules/auth/components/login/login.component';
import { SignupComponent } from '@modules/auth/components/signup/signup.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'app', loadChildren: () => import('@modules/expense-manager/expense-manager.module').then(m => m.ExpenseManagerModule) },
  { path: '**', redirectTo: '' }
];
