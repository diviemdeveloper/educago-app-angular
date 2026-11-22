import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonContent, IonSegment, IonSegmentButton, IonLabel, IonButton, IonFab, IonFabButton, IonIcon,
} from '@ionic/angular';

import { EVENTOS } from '../../datos/eventos';
import { Evento, EstadoEvento } from '../../modelos/evento';
import { CabeceraPaginaComponent } from '../../componentes/cabecera-pagina/cabecera-pagina.component';
import { TarjetaEventoComponent } from '../../componentes/tarjeta-evento/tarjeta-evento.component';
import { ChipEstadoComponent } from '../../componentes/chip-estado/chip-estado.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

type Filtro = 'TODOS' | EstadoEvento;

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
  imports: [
    FormsModule, RouterLink,
    IonContent, IonSegment, IonSegmentButton, IonLabel, IonButton, IonFab, IonFabButton, IonIcon,
    CabeceraPaginaComponent, TarjetaEventoComponent, ChipEstadoComponent, EstadoVacioComponent,
  ],
})
export class EventosPage {
  eventos = EVENTOS;
  filtro: Filtro = 'TODOS';

  filtros: { valor: Filtro; texto: string }[] = [
    { valor: 'TODOS', texto: 'Todos' },
    { valor: 'BORRADOR', texto: 'Borrador' },
    { valor: 'PUBLICADO', texto: 'Publicado' },
    { valor: 'FINALIZADO', texto: 'Finalizado' },
  ];

  get eventosVisibles(): Evento[] {
    return this.filtro === 'TODOS'
      ? this.eventos
      : this.eventos.filter(e => e.estado === this.filtro);
  }

  publicar(evento: Evento) {
    evento.estado = 'PUBLICADO';
  }

  cancelar(evento: Evento) {
    evento.estado = 'CANCELADO';
  }

  eliminar(evento: Evento) {
    const i = this.eventos.indexOf(evento);
    if (i >= 0) this.eventos.splice(i, 1);
  }
}
