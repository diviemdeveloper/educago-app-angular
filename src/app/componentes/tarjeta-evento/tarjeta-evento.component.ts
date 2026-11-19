import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Evento } from '../../modelos/evento';
import { diaCorto, hora } from '../../utilidades/formato';
import { IconoCategoriaComponent } from '../icono-categoria/icono-categoria.component';

@Component({
  selector: 'app-tarjeta-evento',
  templateUrl: './tarjeta-evento.component.html',
  styleUrls: ['./tarjeta-evento.component.scss'],
  imports: [RouterLink, IconoCategoriaComponent],
})
export class TarjetaEventoComponent {
  evento = input.required<Evento>();
  conHora = input<boolean>(false);     // en el Panel se ve la hora; en Eventos no

  // "Jue 15 · 10:00 · Laboratorios"  o  "Jue 15 · Laboratorios"
  linea = computed(() => {
    const e = this.evento();
    const partes = [diaCorto(e.inicio)];
    if (this.conHora()) partes.push(hora(e.inicio));
    partes.push(e.lugar.nombre);
    return partes.join(' · ');
  });
}
