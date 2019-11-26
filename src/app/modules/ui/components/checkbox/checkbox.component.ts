import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent implements OnInit {
  @Input() labelText: string;
  @Input() name: string;
  @Output() check = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleCheck(evt: any) {
    this.check.emit(evt.target.checked);
  }
}
