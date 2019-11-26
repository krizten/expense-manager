import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html'
})
export class FormGroupComponent implements OnInit {
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() name: string;
  @Input() placeholder: string;

  isPassword = true;

  constructor() { }

  ngOnInit() {
  }

  togglePasswordVisibility(): void {
    this.isPassword = !this.isPassword;
  }

}
