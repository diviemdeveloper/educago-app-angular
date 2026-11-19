import { Component, computed, input, model } from '@angular/core';
import { IonModal, IonDatetime, DatetimeCustomEvent } from '@ionic/angular';
import { fechaNumerica } from '../../utilidades/formato';

// Un campo que muestra la fecha como en el Figma ("15/10/2026 10:00")
// y, al tocarlo, abre el calendario de Ionic en una ventana (ion-modal).
@Component({
  selector: 'app-campo-fecha',
  templateUrl: './campo-fecha.component.html',
  styleUrls: ['./campo-fecha.component.scss'],
  imports: [IonModal, IonDatetime],
})
export class CampoFechaComponent {
  valor = model.required<string>();                         // se enlaza con [(valor)]
  presentacion = input<'date-time' | 'date'>('date-time');
  estilo = input<'caja' | 'pastilla'>('caja');
  etiqueta = input<string>('Elegir fecha');                 // para lectores de pantalla

  abierto = false;

  texto = computed(() => fechaNumerica(this.valor(), this.presentacion() === 'date-time'));

  elegir(evento: DatetimeCustomEvent) {
    const v = evento.detail.value;
    if (typeof v === 'string') {
      this.valor.set(v.slice(0, 16));                       // '2026-10-15T10:00'
    }
    this.abierto = false;
  }
}
