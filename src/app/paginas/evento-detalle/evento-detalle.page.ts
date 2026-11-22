import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent, IonBackButton, IonButton, IonList, IonItem, IonLabel, IonNote, IonRouterLink,
} from '@ionic/angular';

import { EVENTOS } from '../../datos/eventos';
import { Evento } from '../../modelos/evento';
import { diaMesHora, rangoEvento } from '../../utilidades/formato';
import { ChipEstadoComponent } from '../../componentes/chip-estado/chip-estado.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-evento-detalle',
  templateUrl: './evento-detalle.page.html',
  styleUrls: ['./evento-detalle.page.scss'],
  imports: [
    RouterLink, IonRouterLink,
    IonContent, IonBackButton, IonButton, IonList, IonItem, IonLabel, IonNote,
    ChipEstadoComponent, EstadoVacioComponent,
  ],
})
export class EventoDetallePage {
  id = input<string>();                 // recibe el ":id" de la dirección

  get evento(): Evento | undefined {
    return EVENTOS.find(e => e.id === Number(this.id()));
  }

  get fecha(): string {
    const e = this.evento;
    return e ? rangoEvento(e.inicio, e.fin) : '';
  }

  get limite(): string {
    const e = this.evento;
    return e ? diaMesHora(e.fechaLimiteInscripcion) : '';
  }

  get plazasLibres(): number {
    const e = this.evento;
    return e ? Math.max(0, e.aforoMaximo - e.inscritos) : 0;
  }

  get requisitos(): string[] {
    const e = this.evento;
    return e?.requisitos ? e.requisitos.split(',').map(r => r.trim()).filter(r => r) : [];
  }
}
