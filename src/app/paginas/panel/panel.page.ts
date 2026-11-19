import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton, IonIcon, IonRouterLink } from '@ionic/angular';

import { EVENTOS } from '../../datos/eventos';
import { RESUMEN_PANEL } from '../../datos/informes';
import { Evento } from '../../modelos/evento';
import { CabeceraPaginaComponent } from '../../componentes/cabecera-pagina/cabecera-pagina.component';
import { TarjetaStatComponent } from '../../componentes/tarjeta-stat/tarjeta-stat.component';
import { TarjetaEventoComponent } from '../../componentes/tarjeta-evento/tarjeta-evento.component';
import { ChipEstadoComponent } from '../../componentes/chip-estado/chip-estado.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.page.html',
  styleUrls: ['./panel.page.scss'],
  imports: [
    IonContent, IonButton, IonIcon, RouterLink, IonRouterLink,
    CabeceraPaginaComponent, TarjetaStatComponent, TarjetaEventoComponent, ChipEstadoComponent,
    EstadoVacioComponent,
  ],
})
export class PanelPage {
  resumen = RESUMEN_PANEL;
  oscuro = document.documentElement.classList.contains('ion-palette-dark');

  // Eventos publicados, ordenados por fecha
  get proximos(): Evento[] {
    return EVENTOS
      .filter(e => e.estado === 'PUBLICADO')
      .sort((a, b) => a.inicio.localeCompare(b.inicio));
  }

  // Eventos publicados con el aforo lleno y gente esperando
  get avisos(): Evento[] {
    return this.proximos.filter(e => e.inscritos >= e.aforoMaximo && e.enEspera > 0);
  }

  cambiarTema() {
    this.oscuro = !this.oscuro;
    document.documentElement.classList.toggle('ion-palette-dark', this.oscuro);
  }
}
