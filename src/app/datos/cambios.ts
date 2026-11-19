import { CambioEvento } from '../modelos/cambio-evento';

export const CAMBIOS: CambioEvento[] = [
  { id: 1, eventoId: 1, campo: 'Lugar',  valorAnterior: 'Patio',     valorNuevo: 'Gimnasio',  autor: 'Lucía',     fecha: '2026-10-14T09:12' },
  { id: 2, eventoId: 1, campo: 'Inicio', valorAnterior: '16:00',     valorNuevo: '17:00',     autor: 'Lucía',     fecha: '2026-10-13T18:40' },
  { id: 3, eventoId: 1, campo: 'Estado', valorAnterior: 'Publicado', valorNuevo: 'Cancelado', autor: 'Dirección', fecha: '2026-10-12T11:05' },
];
