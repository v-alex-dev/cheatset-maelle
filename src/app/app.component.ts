//-------------------------------------------------------------------------
// Angular Core
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// PrimeNG
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BannerComponent } from './banner/banner.component';
//-------------------------------------------------------------------------
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuModule, CommonModule, BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cheatset-maelle';
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Pages',
        items: [
          { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
          {
            label: 'Loops',
            icon: 'pi pi-sync',
            routerLink: '/loops',
          },
        ],
      },
    ];
  }
}
