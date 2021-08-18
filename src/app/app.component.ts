import { User } from './formulario/User.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  users: User[] = [
    {name: 'Lucas', isAdm: true, idade: 20},
    {name: 'Ana', isAdm: true, idade: 30},
    {name: 'Marcos', isAdm: false, idade: 27},
    {name: 'Julio', isAdm: true, idade: 15}
  ]

  title = 'estudos-angular';
}
