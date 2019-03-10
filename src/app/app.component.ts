import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
number1: number ;
number2: number;
sum:number;
multiplicate: number;
substract:number;
division:number;
current = (new Date()).getFullYear();

onSubmit() {
this.sum = this.number1 + this.number2;
this.multiplicate = this.number1 * this.number2;
this.substract = this.number1 - this.number2;
this.division = this.number1 / this.number2;
}
}
