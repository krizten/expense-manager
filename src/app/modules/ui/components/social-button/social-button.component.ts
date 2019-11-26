import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-button',
  templateUrl: './social-button.component.html'
})
export class SocialButtonComponent implements OnInit {
  @Input() type: 'google' | 'facebook' | 'twitter';

  constructor() { }

  ngOnInit() {
  }

}
