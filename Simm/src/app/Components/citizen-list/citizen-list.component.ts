import { Component, Input, input } from '@angular/core';
import { ICitizen } from '../../Interfaces/ICitizen';

@Component({
  selector: 'app-citizen-list',
  templateUrl: './citizen-list.component.html',
  styleUrl: './citizen-list.component.sass'
})
export class CitizenListComponent {
  @Input() citizens: ICitizen [] = []



}
