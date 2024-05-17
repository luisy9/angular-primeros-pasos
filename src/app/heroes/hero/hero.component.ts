import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public nombre: string = "Batman";
  public age: number = 22;

  changeHeroeName(value: string): void {
    this.nombre = value;
  } 

  changeHeroeAge (value: number): void {
    this.age = value;
  } 

  get capitalizedName(): string {
    return this.nombre.toUpperCase();
  }

  protected get heroDescription(): string {
    return `${this.nombre} - ${this.age}`;
  }

  resetForm(): void{
    this.nombre = "Bataman";
    this.age = 22;

    // document.querySelectorAll('h1')!.forEach(element => {
    //   return element.innerHTML = `<h1>Hola desde Angular 😄</h1>`;
    // })
  }

}
