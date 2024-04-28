import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { linkHome } from '../../interfaces/linkUtils.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  items: linkHome[] = [
    {
      icon: 'pi pi-github',
      src: 'https://github.com/v-alex-dev',
      title: 'GitHub',
    },
    {
      icon: 'pi pi-trophy',
      src: 'https://www.codewars.com/',
      title: 'CodeWars',
    },
  ];
}
