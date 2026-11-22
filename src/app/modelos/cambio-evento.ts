export interface CambioEvento {
  id: number;
  eventoId: number;
  campo: 'Lugar' | 'Inicio' | 'Fin' | 'Estado';
  valorAnterior: string;
  valorNuevo: string;
  autor: string;
  fecha: string;      // ISO
}
