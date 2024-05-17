import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroes: string[] = ['Spiderman', 'Hulk', 'Batman', 'Bane'];
  public hereoe?: string;

  deleteLastHeroe() {
    return this.hereoe = this.heroes.pop();
  }

  get deletedHeroe(): string {
    return this.hereoe!;
  }
}
