import { Component } from '@angular/core';
import { BolsistasService } from '../../services/bolsistas.service';
import { Bolsista } from '../../model/Bolsista';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-bolsistas-list',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './bolsistas-list.component.html',
  styleUrl: './bolsistas-list.component.scss'
})
export class BolsistasListComponent {

  bolsistasList: Bolsista[] = [];

  constructor(private service: BolsistasService){}

  ngOnInit(){
    this.getBolsistas();
  }

  getBolsistas(){
    this.service.listarBolsistas().subscribe(lista => this.bolsistasList = lista)
  }

  deleteBolsista(id: string){
    this.service.deleteBolsista(id).subscribe(retorno => {
      let posicao = this.bolsistasList.findIndex(obj => {
        return obj.id_bolsista == id;
      });
      
      this.bolsistasList.splice(posicao, 1);
    })
  }

}
