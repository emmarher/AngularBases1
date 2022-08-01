import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  
  heroeBorrado:string='';
  mostrarHeroeBorrado: boolean=false;

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];

  borrarHeroe(){
    console.log('Borrando Heroe...');
    this.mostrarHeroeBorrado= true;
    this.heroeBorrado = this.heroes.shift() || ''; // ya que la funcion shift retorna string o undefined, en caso de undefined asignamos un string vacio
  }

}
