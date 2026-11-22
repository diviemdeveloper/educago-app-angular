import { Component, input } from '@angular/core';

// Lo que se ve cuando una lista no tiene elementos.
// Con <ng-content /> quien lo usa puede añadir un botón debajo.
@Component({
  selector: 'app-estado-vacio',
  templateUrl: './estado-vacio.component.html',
  styleUrls: ['./estado-vacio.component.scss'],
})
export class EstadoVacioComponent {
  icono = input<string>('📭');
  titulo = input.required<string>();
  texto = input<string>('');
}
