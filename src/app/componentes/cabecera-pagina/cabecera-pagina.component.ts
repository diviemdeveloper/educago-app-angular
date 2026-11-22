import { Component, input } from '@angular/core';

// Título grande + subtítulo de las pestañas ("Eventos · Gestiona cualquier evento").
// A la derecha hay un hueco (ng-content) para poner botones.
@Component({
  selector: 'app-cabecera-pagina',
  templateUrl: './cabecera-pagina.component.html',
  styleUrls: ['./cabecera-pagina.component.scss'],
})
export class CabeceraPaginaComponent {
  titulo = input.required<string>();
  subtitulo = input<string>('');
}
