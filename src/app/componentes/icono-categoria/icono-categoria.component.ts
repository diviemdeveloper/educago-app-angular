import { Component, computed, input } from '@angular/core';
import { tinte } from '../../utilidades/formato';

// El cuadrado de color suave con el emoji (🔬, ⚽, 🎭...)
@Component({
  selector: 'app-icono-categoria',
  templateUrl: './icono-categoria.component.html',
  styleUrls: ['./icono-categoria.component.scss'],
})
export class IconoCategoriaComponent {
  icono = input.required<string>();
  color = input<string>('#6d28d9');
  tamano = input<number>(48);

  fondo = computed(() => tinte(this.color(), 0.2));
}
