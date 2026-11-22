import { Component, input } from '@angular/core';

// Las cuatro cifras del Panel (12 Publicados, 3 Borradores...)
@Component({
  selector: 'app-tarjeta-stat',
  templateUrl: './tarjeta-stat.component.html',
  styleUrls: ['./tarjeta-stat.component.scss'],
})
export class TarjetaStatComponent {
  valor = input.required<string | number>();
  etiqueta = input.required<string>();
  color = input<string>('var(--ion-color-primary)');
}
