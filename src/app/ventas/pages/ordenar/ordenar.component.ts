import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  enMayusculas: boolean = true;

  ordenarPor: string = '';
  heroes: Heroe[] = [
    { nombre: 'Spiderman', color: Color.rojo, vuela: false },
    { nombre: 'Capitán América', color: Color.azul, vuela: true },
    { nombre: 'Hulk', color: Color.verde, vuela: false },
    { nombre: 'Ironman', color: Color.negro, vuela: true },
  ]

  cambiarValor() {
    this.enMayusculas = !this.enMayusculas
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }

}
