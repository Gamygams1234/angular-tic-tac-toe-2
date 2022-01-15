import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
// this is a simple component that does not handle state

export class SquareComponent  {

  @Input() value: 'X' | 'O' | undefined;



}
