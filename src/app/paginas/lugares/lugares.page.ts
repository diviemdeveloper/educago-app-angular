import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonItem, IonLabel, IonButton, IonModal, IonInput } from '@ionic/angular';

import { LUGARES } from '../../datos/lugares';
import { CabeceraPaginaComponent } from '../../componentes/cabecera-pagina/cabecera-pagina.component';
import { IconoCategoriaComponent } from '../../componentes/icono-categoria/icono-categoria.component';
import { ChipEstadoComponent } from '../../componentes/chip-estado/chip-estado.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
  imports: [
    FormsModule,
    IonContent, IonList, IonItem, IonLabel, IonButton, IonModal, IonInput,
    CabeceraPaginaComponent, IconoCategoriaComponent, ChipEstadoComponent, EstadoVacioComponent,
  ],
})
export class LugaresPage {
  lugares = LUGARES;

  modalAbierto = false;
  iconos = ['🎭', '🏀', '📚', '🌳', '🧪', '🎵', '💻', '🍽️'];
  nuevoNombre = '';
  nuevoAforo = 30;
  nuevoIcono = '🎵';

  guardar() {
    this.lugares.push({
      id: Math.max(0, ...this.lugares.map(l => l.id)) + 1,
      nombre: this.nuevoNombre.trim(),
      aforoMaximo: Number(this.nuevoAforo),
      icono: this.nuevoIcono,
      ocupadoHoy: false,
    });
    this.nuevoNombre = '';
    this.nuevoAforo = 30;
    this.modalAbierto = false;
  }
}
