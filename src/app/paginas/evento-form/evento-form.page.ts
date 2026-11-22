import { Component, OnInit, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonInput, IonTextarea,
  IonSelect, IonSelectOption, IonButton, NavController,
} from '@ionic/angular';

import { CATEGORIAS } from '../../datos/categorias';
import { CURSOS } from '../../datos/cursos';
import { LUGARES } from '../../datos/lugares';
import { EVENTOS } from '../../datos/eventos';
import { Evento, EstadoEvento } from '../../modelos/evento';
import { tinte } from '../../utilidades/formato';
import { CampoFechaComponent } from '../../componentes/campo-fecha/campo-fecha.component';

// Sirve para crear (/eventos/nuevo) y para editar (/eventos/:id/editar)
@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.page.html',
  styleUrls: ['./evento-form.page.scss'],
  imports: [
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonInput, IonTextarea,
    IonSelect, IonSelectOption, IonButton,
    CampoFechaComponent,
  ],
})
export class EventoFormPage implements OnInit {
  private nav = inject(NavController);

  id = input<string>();                 // solo llega al editar

  categorias = CATEGORIAS;
  cursos = CURSOS;
  lugares = LUGARES;
  tinte = tinte;

  editando?: Evento;

  // Valores del formulario (los del Figma como ejemplo)
  titulo = '';
  descripcion = '';
  requisitos = '';
  categoriaId = CATEGORIAS[0].id;
  inicio = '2026-10-15T10:00';
  fin = '2026-10-15T14:00';
  lugarId = LUGARES[4].id;
  aforo = 60;
  limite = '2026-10-14T20:00';
  cursosElegidos = new Set<number>([1, 2, 3]);
  cartel = '';

  ngOnInit() {
    const e = EVENTOS.find(ev => ev.id === Number(this.id()));
    if (!e) return;
    this.editando = e;
    this.titulo = e.titulo;
    this.descripcion = e.descripcion;
    this.requisitos = e.requisitos;
    this.categoriaId = e.categoria.id;
    this.inicio = e.inicio;
    this.fin = e.fin;
    this.lugarId = e.lugar.id;
    this.aforo = e.aforoMaximo;
    this.limite = e.fechaLimiteInscripcion;
    this.cursosElegidos = new Set(e.cursos.map(c => c.id));
  }

  get fechasMal(): boolean {
    return this.fin <= this.inicio;
  }

  get valido(): boolean {
    return this.titulo.trim().length > 0 && !this.fechasMal && this.aforo > 0;
  }

  alternarCurso(id: number) {
    if (this.cursosElegidos.has(id)) {
      this.cursosElegidos.delete(id);
    } else {
      this.cursosElegidos.add(id);
    }
  }

  // El aforo no puede superar el del lugar elegido
  ajustarAforo() {
    const lugar = LUGARES.find(l => l.id === this.lugarId);
    if (lugar && (this.aforo > lugar.aforoMaximo || !this.aforo)) {
      this.aforo = lugar.aforoMaximo;
    }
  }

  elegirCartel(evento: Event) {
    const fichero = (evento.target as HTMLInputElement).files?.[0];
    this.cartel = fichero ? fichero.name : '';
  }

  guardar(estado: EstadoEvento) {
    const datos = {
      titulo: this.titulo.trim(),
      descripcion: this.descripcion.trim(),
      requisitos: this.requisitos.trim(),
      inicio: this.inicio,
      fin: this.fin,
      fechaLimiteInscripcion: this.limite,
      estado,
      aforoMaximo: Number(this.aforo),
      lugar: LUGARES.find(l => l.id === this.lugarId) ?? LUGARES[0],
      categoria: CATEGORIAS.find(c => c.id === this.categoriaId) ?? CATEGORIAS[0],
      cursos: CURSOS.filter(c => this.cursosElegidos.has(c.id)),
    };

    if (this.editando) {
      Object.assign(this.editando, datos);
    } else {
      const nuevoId = Math.max(0, ...EVENTOS.map(e => e.id)) + 1;
      EVENTOS.unshift({
        id: nuevoId, ...datos,
        organizador: 'Dirección', inscritos: 0, enEspera: 0, seguidores: 0,
      });
    }

    this.nav.navigateBack('/app/eventos');
  }
}
