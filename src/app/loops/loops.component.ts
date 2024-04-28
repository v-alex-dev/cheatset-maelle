import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ImageModule } from 'primeng/image';
@Component({
  selector: 'app-loops',
  standalone: true,
  imports: [AccordionModule, ImageModule],
  templateUrl: './loops.component.html',
  styleUrl: './loops.component.scss',
})
export class LoopsComponent {}
