import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  
  constructor(private dbzService: DbzService){}

  /* 
    Hacemos un get para llamar a la funcion y que nos retorne los characters 
    del servicio de dbzService.characters y devolvemos un nuevo array 
  */
  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  /*  
    Hacemos un delete llamando al servicio de dbzService y ejecutando la funcion de
    characterDeleted y le pasamos el id del character que queremos eliminar
  */
  characterDeleted(id: string) {
    this.dbzService.characterDeleted(id);
  }

  /*  
    Creamos un nuevo character llamando al servicio de dbzService y 
    luego llamamos a la funcion de onNewCharacter pasandole el nuevo character de tipo Character
  */
  onNewCharacter(character: Character) {
    this.dbzService.onNewCharacter(character);
  }
}