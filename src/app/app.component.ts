import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BolsistasListComponent } from './components/bolsistas-list/bolsistas-list.component';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BolsistasListComponent, ModalComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'frontend';
}
