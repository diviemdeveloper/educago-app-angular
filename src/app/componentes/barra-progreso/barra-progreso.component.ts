import { Component, computed, input } from '@angular/core';

// Barra horizontal de los informes. Dos aspectos:
//  - 'categoria': etiqueta gris, barra del color de la categoría
//  - 'curso':     etiqueta en negrita, barra violeta sobre una pista suave
@Component({
  selector: 'app-barra-progreso',
  templateUrl: './barra-progreso.component.html',
  styleUrls: ['./barra-progreso.component.scss'],
})
export class BarraProgresoComponent {
  etiqueta = input.required<string>();
  valor = input.required<number>();
  maximo = input<number>(100);
  color = input<string>('var(--ion-color-primary)');
  variante = input<'categoria' | 'curso'>('categoria');

  porcentaje = computed(() =>
    this.maximo() > 0 ? Math.min(100, (this.valor() / this.maximo()) * 100) : 0,
  );
}
