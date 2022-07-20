import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


 heroeBorrado:any;


  constructor() { }

  ngOnInit(): void {
  }
heroes: string[]=['Spiderman','Ironman','Superman','Aquaman','Thor'];

borrarHeroe(){
       console.log('borrando...')
      this.heroeBorrado= this.heroes.shift();
      
      
}


}
