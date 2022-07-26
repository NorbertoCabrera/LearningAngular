import { Component, Input} from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Personaje } from '../interfaces/dbz.interface';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  
  personajes:Personaje[]=[
    {
      nombre:'Goku',
      poder:15000
    },
    {
      nombre:'Vegeta',
      poder:8000
    }
  ]

  nuevo:Personaje={
    nombre:'caca',
    poder:4
  }

  agregarNuevoPersonaje(personaje:Personaje){
    this.personajes.push(personaje);
  }
 

}
