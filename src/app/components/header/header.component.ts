import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { BolsistaFormComponent } from '../bolsista-form/bolsista-form.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ModalComponent, BolsistaFormComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor() {}

  addBolsista(){

  }

}
