export type EstadoInscripcion = 'CON_PLAZA' | 'EN_ESPERA';

export interface Inscripcion {
  id: number;
  eventoId: number;
  estudiante: string;
  curso: string;
  estado: EstadoInscripcion;
  posicionEspera?: number;   // solo si está EN_ESPERA
  asistio: boolean;
}
