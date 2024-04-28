import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoopsComponent } from './loops/loops.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loops', component: LoopsComponent },
];
