import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CharacterService } from '../../service/character.service';
import { CommonModule } from '@angular/common';
import { DefaultService } from '../../service/default.service';
import { Race, Armor, ChClass, God, Magic, Origin, Power, Proficiency, Shild, Skill, Weapon } from '../../models/default.model';

@Component({
  selector: 'app-character-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.css'
})
export class CharacterFormComponent implements OnInit {


  characterForm!: FormGroup;
  raceIds: Race[] = [];
  chClassIds: ChClass[] = [];
  originIds: Origin[] = [];
  godIds: God[] = [];
  skillIds: Skill[] = [];
  powerIds: Power[] = [];
  weaponIds: Weapon[] = [];
  armorIds: Armor[] = [];
  shildIds: Shild[] = [];
  magicIds: Magic[] = [];
  proficiencyIds: Proficiency[] = [];

  constructor(
    private fb: FormBuilder,
    private characterService: CharacterService,
    private defualtService: DefaultService
  ) { }

  ngOnInit(): void {
    this.setAllSelects();
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
      proficiencyIds: [[]]
    })
  }

  setAllSelects(): void {
    this.defualtService.getAllRaces().subscribe({
      next: (response: Race[]) => {
        this.raceIds = response;
      },
      error: (error: any) => {
        console.log("Erro ao buscar raça", error);
      }
    });

    this.defualtService.getAllArmors().subscribe({
      next: (response: Armor[]) => {
        this.armorIds = response;
      },
      error: (error: any) => {
        console.log("Erro ao buscar armaduras", error);
      }
    });

    this.defualtService.getAllChClass().subscribe({
      next: (response: ChClass[]) => {
        this.chClassIds = response;
      },
      error: (error: any) => {
        console.log("Erro ao buscar classes", error);
      }
    });

    this.defualtService.getAllGods().subscribe({
      next: (response: God[]) => {
        this.godIds = response;
      },
      error: (error: any) => {
        console.log("Erro ao buscar deuses", error);
      }
    });

    this.defualtService.getAllMagics().subscribe({
      next: (response: Magic[]) => {
        this.magicIds = response;
      },
      error: (error: any) => {
        console.log("Erro ao buscar magias", error);
      }
    });

    this.defualtService.getAllOrigins().subscribe({
      next: (response: Origin[]) => {
        this.originIds = response;
      },
      error: (error: any) => {
        console.log("Erro ao buscar origens", error);
      }
    });

    this.defualtService.getAllPowers().subscribe({
      next: (response: Power[]) => {
        this.powerIds = response;
      },
      error: (error: any) => {
        console.log("Erro ao buscar poderes", error);
      }
    });

    this.defualtService.getAllProficiencies().subscribe({
      next: (response: Proficiency[]) => {
        this.proficiencyIds = response;
      },
      error: (error: any) => {
        console.log("Erro ao buscar proficiencias", error);
      }
    });

    this.defualtService.getAllShilds().subscribe({
      next: (response: Shild[]) => {
        this.shildIds = response;
      },
      error: (error: any) => {
        console.log("Erro ao buscar escudos", error);
      }
    });

    this.defualtService.getAllSkills().subscribe({
      next: (response: Skill[]) => {
        this.skillIds = response;
      },
      error: (error: any) => {
        console.log("Erro ao buscar pericias", error);
      }
    });

    this.defualtService.getAllWeapons().subscribe({
      next: (response: Weapon[]) => {
        this.weaponIds = response;
      },
      error: (error: any) => {
        console.log("Erro ao buscar pericias", error);
      }
    });
  }
  onSubmit(): void {
    if (this.characterForm.valid) {
      this.characterService.createCharacter(this.characterForm.value).subscribe({
        next: (response) => {
          console.log("Personagem craido com sucesso", response);
        },
        error: (error) => {
          console.log("Erro ao cadastrar", error);
          console.log("formulario", this.characterForm.value);
        }
      });
    }
  }

}
