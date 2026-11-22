import { Component, input } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent } from '@ionic/angular';

import { EVENTOS } from '../../datos/eventos';
import { CAMBIOS } from '../../datos/cambios';
import { Evento } from '../../modelos/evento';
import { CambioEvento } from '../../modelos/cambio-evento';
import { diaMesHora } from '../../utilidades/formato';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
  imports: [IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, EstadoVacioComponent],
})
export class HistorialPage {
  id = input<string>();
  diaMesHora = diaMesHora;

  get evento(): Evento | undefined {
    return EVENTOS.find(e => e.id === Number(this.id()));
  }

  // Del más reciente al más antiguo
  get cambios(): CambioEvento[] {
    return CAMBIOS
      .filter(c => c.eventoId === Number(this.id()))
      .sort((a, b) => b.fecha.localeCompare(a.fecha));
  }
}
