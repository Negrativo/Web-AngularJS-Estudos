import { Component, OnInit, Input} from '@angular/core';
import { User } from './User.model';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input() user!: User;

  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    console.log(`Nome: ${this.user.name}`)
  }

}
