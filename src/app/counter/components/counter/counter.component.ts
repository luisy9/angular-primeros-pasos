import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Este es el contador: {{ counter }}</h1>
    <button (click)="incrementCounter(+1)">Incrementar</button>
    <button (click)="decrementCounter(-1)">Decrementar</button>
    <button (click)="resetCounter()">reset</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  constructor(){}

  incrementCounter = (value: number): number => (this.counter += value);

  decrementCounter = (value: number): number => (this.counter += value);

  resetCounter = () => (this.counter = 0);
}
