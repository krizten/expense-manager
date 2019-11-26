import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ButtonComponent } from './components/button/button.component';
import { SocialButtonComponent } from './components/social-button/social-button.component';


@NgModule({
  declarations: [FormGroupComponent, CheckboxComponent, ButtonComponent, SocialButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [FormGroupComponent, CheckboxComponent, FormsModule, ButtonComponent, SocialButtonComponent]
})
export class UiModule { }
