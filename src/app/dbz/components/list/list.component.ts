import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // @Output()
  // public onDCharacter: EventEmitter<number> = new EventEmitter();

  @Output()
  public onDCharacterId: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name:'Trunk',
    power:12010
  }]

  // onDeleteCharacter(index:number):void{

  //   this.onDCharacter.emit(index);
  // }


  onDeleteCharacterById(id:string):void{

    this.onDCharacterId.emit(id);
  }
}
