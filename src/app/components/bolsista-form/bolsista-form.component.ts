import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bolsista-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './bolsista-form.component.html',
  styleUrl: './bolsista-form.component.scss'
})
export class BolsistaFormComponent {

  bolsistaForm!: FormGroup;

  ngOnInit():void {
    this.bolsistaForm = new FormGroup({
      nome: new FormControl(''),
      num_id: new FormControl(''),
      data_matricula: new FormControl(''),
      cod_banco: new FormControl(''),
      num_agencia: new FormControl(''),
      num_conta: new FormControl(''),
    })
  }

  submit(){
    console.log(this.bolsistaForm.value)
  }

}
