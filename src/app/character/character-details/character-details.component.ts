import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../service/character.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-details',
  imports: [CommonModule],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent implements OnInit {
  character: any;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.characterService.getCharacterById(+id).subscribe({
        next: (response) => {
          this.character = response;
        },
        error: (error) => {
          console.log("Erro ao buscar personagem", error);
        }
      });
    } else {
      console.log("ID personagem não encontrado");
    }

  }

}
