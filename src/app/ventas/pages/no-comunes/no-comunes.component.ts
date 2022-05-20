import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  /**
   * i18nSelect Pipe
   */
  nombre: string = 'Pamela';
  genero: string = 'femenino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  /**
   * 
   * i18nPlural Pipe
   */
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Miguel', 'Pamela'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': `tenemos # clientes esperando`
  }

  /**
   * KeyValue Pipe
   * @objeto persona es un objeto literal
   */
  persona = {
    nombre: 'Miguel',
    edad: 28,
    direccion: 'Quito, Ecuador'
  }
  /**
   * Json Pipe
   * @objeto persona es un objeto literal
   */
  heroes = [
    { nombre: 'Superman', vuela: true },
    { nombre: 'Robin', vuela: false },
    { nombre: 'Aquaman', vuela: false }
  ]

  /**
   * 
   * Async Pipe
   */

  //Observable

  miObservableInterval = interval(3500);

  //Promesa
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa (3,5 segundos)')
    }, 3000);
  })

  constructor(private _primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this._primengConfig.ripple = true;

  }

  cambiarNombre() {
    if (this.nombre === 'Pamela') {
      this.nombre = 'Miguel';
      this.genero = 'masculino'
    } else {
      this.nombre = 'Pamela';
      this.genero = 'femenino'
    }
  }

  borrarCliente() {
    this.clientes.shift();
  }

  restablecerClientes() {
    this.clientes = ['Maria', 'Pedro', 'Juan', 'Miguel', 'Pamela'];
  }

  cambiarColor(): string {
    return this.nombre === 'Pamela' ?
      'p-button-rounded' :
      'p-button-rounded p-button-help'
  }

}
