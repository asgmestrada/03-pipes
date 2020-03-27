import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitan America';
  nombre2: string = "MoIsEs EsTrAdA GoNzAlEz"
  personajes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  arreglo=[1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje: number = 0.235;
  salario: number = 12345;
  fecha: Date = new Date();
  idioma: string = 'es';
  videoUrl: string='https://www.youtube.com/embed/wNfoGJoUvVo';
  activar: boolean = true;
  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(()=>{resolve('llego la data')},4500);

  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverin',
    eded: 500,
    direccion:{
      calle: 'primera',
      casa: 20
    }

  }

}
