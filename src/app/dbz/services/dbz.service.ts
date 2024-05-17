import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      nombre: 'Goku',
      poder: 1000.0,
    },
    {
      id: uuid(),
      nombre: 'Broly',
      poder: 1000.999,
    },
    {
      id: uuid(),
      nombre: 'Krilin',
      poder: 999,
    },
  ];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() };
    this.characters.push(newCharacter);
  }

  characterDeleted = (id?: string): Character[] | undefined => {
    if (!id) return;
    
    return (this.characters = this.characters.filter(
      (element) => element.id !== id
    ));
  };
}
