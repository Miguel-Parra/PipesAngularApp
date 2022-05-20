import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
nombreLower: string = 'miguel';
nombreUpper: string = 'MIGUEL'; 
nombreCompleto: string = 'MigueL pArRa';
fecha: Date = new Date(); //dia de hoy, clase propia de JS
}
