import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonCard, IonCardContent, IonButton,
  IonModal, IonInput, IonTextarea,
} from '@ionic/angular';

import { EVENTOS } from '../../datos/eventos';
import { PUBLICACIONES } from '../../datos/publicaciones';
import { Evento } from '../../modelos/evento';
import { Publicacion } from '../../modelos/publicacion';
import { diaMesHora } from '../../utilidades/formato';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

const COLORES_FOTO = ['#67e8f9', '#a5b4fc', '#f9a8d4'];

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
  imports: [
    FormsModule,
    IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonCard, IonCardContent, IonButton,
    IonModal, IonInput, IonTextarea,
    EstadoVacioComponent,
  ],
})
export class ResultadosPage {
  id = input<string>();
  diaMesHora = diaMesHora;

  modalAbierto = false;
  nuevoDestacado = '';
  nuevoTexto = '';
  nuevasFotos: string[] = [];

  get evento(): Evento | undefined {
    return EVENTOS.find(e => e.id === Number(this.id()));
  }

  get publicaciones(): Publicacion[] {
    return PUBLICACIONES
      .filter(p => p.eventoId === Number(this.id()))
      .sort((a, b) => b.fecha.localeCompare(a.fecha));
  }

  get puedeAnadirFoto(): boolean {
    return this.nuevasFotos.length < 3;
  }

  anadirFoto() {
    this.nuevasFotos.push(COLORES_FOTO[this.nuevasFotos.length % COLORES_FOTO.length]);
  }

  publicar() {
    const ahora = new Date();
    const iso = new Date(ahora.getTime() - ahora.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
    PUBLICACIONES.push({
      id: Math.max(0, ...PUBLICACIONES.map(p => p.id)) + 1,
      eventoId: Number(this.id()),
      autor: 'Dirección',
      rolAutor: 'Organizadora',
      destacado: this.nuevoDestacado.trim(),
      texto: this.nuevoTexto.trim(),
      fotos: this.nuevasFotos.map((color, i) => ({ id: i + 1, color })),
      fecha: iso,
    });
    this.nuevoDestacado = '';
    this.nuevoTexto = '';
    this.nuevasFotos = [];
    this.modalAbierto = false;
  }
}
