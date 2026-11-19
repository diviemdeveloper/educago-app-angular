import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular';

import { PARTICIPACION_CATEGORIA, PARTICIPACION_CURSO } from '../../datos/informes';
import { Estadistica } from '../../modelos/estadistica';
import { CabeceraPaginaComponent } from '../../componentes/cabecera-pagina/cabecera-pagina.component';
import { CampoFechaComponent } from '../../componentes/campo-fecha/campo-fecha.component';
import { BarraProgresoComponent } from '../../componentes/barra-progreso/barra-progreso.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.page.html',
  styleUrls: ['./informes.page.scss'],
  imports: [IonContent, CabeceraPaginaComponent, CampoFechaComponent, BarraProgresoComponent, EstadoVacioComponent],
})
export class InformesPage {
  desde = '2026-09-01T00:00';
  hasta = '2026-12-31T00:00';

  // Con datos de maqueta solo comprobamos que el rango tenga sentido.
  // En la entrega 2 se pedirán al servidor filtrando por estas fechas.
  private get rangoValido(): boolean {
    return this.desde <= this.hasta;
  }

  get porCategoria(): Estadistica[] {
    return this.rangoValido ? PARTICIPACION_CATEGORIA : [];
  }

  get porCurso(): Estadistica[] {
    return this.rangoValido ? PARTICIPACION_CURSO : [];
  }

  get maxCategoria(): number {
    return Math.max(1, ...this.porCategoria.map(c => c.total));
  }

  // En el Figma las barras por curso no llegan al final: dejamos margen
  get maxCurso(): number {
    return Math.max(1, ...this.porCurso.map(c => c.total)) * 1.05;
  }
}
