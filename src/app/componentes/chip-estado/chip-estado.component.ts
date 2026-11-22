import { Component, input } from '@angular/core';
import { EstadoEvento } from '../../modelos/evento';

// Además de los estados de un evento, el chip sirve para lugares y plazas
export type TipoChip = EstadoEvento | 'LIBRE' | 'OCUPADO' | 'COMPLETO' | 'PLAZAS';

@Component({
  selector: 'app-chip-estado',
  templateUrl: './chip-estado.component.html',
  styleUrls: ['./chip-estado.component.scss'],
})
export class ChipEstadoComponent {
  estado = input.required<TipoChip>();
  texto = input<string>('');          // solo para PLAZAS: "36/60"
}
