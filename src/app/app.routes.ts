import { Routes } from '@angular/router';
import { CharacterDetailsComponent } from './character/character-details/character-details.component';
import { CharacterFormComponent } from './character/character-form/character-form.component';

export const routes: Routes = [
    { path: 'create', component: CharacterFormComponent },
    { path: 'details/:id', component: CharacterDetailsComponent },
    { path: '', redirectTo: '/create', pathMatch: 'full' }
];
