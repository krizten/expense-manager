import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const expenseManagerRoutes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(expenseManagerRoutes)
  ]
})
export class ExpenseManagerModule { }
