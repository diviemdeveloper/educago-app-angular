import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonLabel],
})
export class TabsPage {
  // El nombre de "tab" debe ser IDÉNTICO al "path" de la ruta hija
  pestanas = [
    { tab: 'panel',    texto: 'Panel',    icono: '📊' },
    { tab: 'eventos',  texto: 'Eventos',  icono: '📅' },
    { tab: 'lugares',  texto: 'Lugares',  icono: '📍' },
    { tab: 'informes', texto: 'Informes', icono: '📈' },
  ];
}
