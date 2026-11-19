// Datos de los informes de participación
export interface Estadistica {
  etiqueta: string;
  total: number;
  color?: string;
}

export interface ResumenPanel {
  publicados: number;
  borradores: number;
  inscritos: number;
  asistencia: number;   // porcentaje
}
