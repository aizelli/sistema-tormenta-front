import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CharacterService } from '../../service/character.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.css'
})
export class CharacterFormComponent implements OnInit {

  characterForm!: FormGroup;
  raceIds = [{ id: 1, name: 'Humano' }, { id: 2, name: 'Elfo' }];
  chClassIds = [{ id: 1, name: 'Guerreiro' }, { id: 2, name: 'Mago' }];
  originIds = [{ id: 1, name: 'Nobre' }, { id: 2, name: 'Camponês' }];
  godIds = [{ id: 1, name: 'Zeus' }, { id: 2, name: 'Ares' }];
  skillIds = [{ id: 1, name: 'Força' }, { id: 2, name: 'Agilidade' }];
  powerIds = [{ id: 1, name: 'Voo' }, { id: 2, name: 'Invisibilidade' }];
  weaponIds = [{ id: 1, name: 'Espada' }, { id: 2, name: 'Arco' }];
  armorIds = [{ id: 1, name: 'Armadura de Ferro' }, { id: 2, name: 'Armadura de Couro' }];
  shildIds = [{ id: 1, name: 'Escudo Grande' }, { id: 2, name: 'Escudo Pequeno' }];
  magicIds = [{ id: 1, name: 'Bola de Fogo' }, { id: 2, name: 'Cura' }];
  proficiencyIds = [{ id: 1, name: 'Armas Pesadas' }, { id: 2, name: 'Armas Leves' }];
  adventureIds = [{ id: 1, name: 'Aventura 1' }, { id: 2, name: 'Aventura 2' }];

  constructor(
    private fb: FormBuilder,
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.characterForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      health: [1, Validators.min(1)],
      maxHealth: [1, Validators.min(1)],
      mana: [1, Validators.min(1)],
      maxMana: [1, Validators.min(1)],
      defence: [0],
      level: [1, Validators.min(1)],
      tibar: [0],
      attributePoints: [0],
      inGame: [false],
      strength: [0],
      dexterity: [0],
      constitution: [0],
      intelligence: [0],
      wisdom: [0],
      charisma: [0],
      userId: [1], // Substitua com o ID do usuário real
      raceId: [1],
      chClassId: [1],
      originId: [1],
      godId: [1],
      skillIds: [[]],
      powerIds: [[]],
      weaponId: [1],
      armorId: [1],
      shildId: [1],
      magicIds: [[]],
      proficiencyIds: [[]],
      adventureId: [1]
    })
  }

  onSubmit(): void {
    if (this.characterForm.valid) {
      this.characterService.createCharacter(this.characterForm.value).subscribe(
        response => {
          console.log("Personagem craido com sucesso", response);
        },
        error => {
          console.log("Erro ao cadastrar", error);
        }
      );
    }
  }

}
