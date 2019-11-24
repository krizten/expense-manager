import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { LandingPageComponent } from './components/landing-page/landing-page.component';



@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    NzCarouselModule
  ],
})
export class LandingPageModule { }
