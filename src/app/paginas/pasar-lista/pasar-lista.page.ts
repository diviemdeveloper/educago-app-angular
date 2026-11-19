import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonSearchbar, IonList, IonItem,
  IonLabel, IonToggle, IonButton, IonToast,
} from '@ionic/angular';

import { EVENTOS } from '../../datos/eventos';
import { INSCRIPCIONES } from '../../datos/inscripciones';
import { Evento } from '../../modelos/evento';
import { Inscripcion } from '../../modelos/inscripcion';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-pasar-lista',
  templateUrl: './pasar-lista.page.html',
  styleUrls: ['./pasar-lista.page.scss'],
  imports: [
    FormsModule,
    IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonSearchbar, IonList, IonItem,
    IonLabel, IonToggle, IonButton, IonToast,
    EstadoVacioComponent,
  ],
})
export class PasarListaPage {
  id = input<string>();
  busqueda = '';
  guardado = false;

  get evento(): Evento | undefined {
    return EVENTOS.find(e => e.id === Number(this.id()));
  }

  private get delEvento(): Inscripcion[] {
    return INSCRIPCIONES.filter(i => i.eventoId === Number(this.id()));
  }

  get conPlazaVisibles(): Inscripcion[] {
    const texto = this.busqueda.trim().toLowerCase();
    return this.delEvento
      .filter(i => i.estado === 'CON_PLAZA')
      .filter(i => i.estudiante.toLowerCase().includes(texto));
  }

  get enEspera(): Inscripcion[] {
    return this.delEvento
      .filter(i => i.estado === 'EN_ESPERA')
      .sort((a, b) => (a.posicionEspera ?? 0) - (b.posicionEspera ?? 0));
  }
}
