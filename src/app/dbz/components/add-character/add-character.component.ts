import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public addCharacter: Character = {
    id: '',
    nombre: '',
    poder: 0,
  };

  addCharacterForm(): void {
    if (this.addCharacter.nombre.length === 0) return;

    this.onNewCharacter.emit(this.addCharacter);

    this.addCharacter = { id: '', nombre: '', poder: 0 };
  }
}
