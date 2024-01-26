import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButton],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input()
  color!: string;
  @Input()
  text!: string;

  @Output()
  btnClick = new EventEmitter();

  onClickAdd(){
    console.log('button');
    this.btnClick.emit();
  }
}
