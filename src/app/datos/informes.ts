import { Estadistica, ResumenPanel } from '../modelos/estadistica';

export const RESUMEN_PANEL: ResumenPanel = {
  publicados: 12,
  borradores: 3,
  inscritos: 348,
  asistencia: 86,
};

export const PARTICIPACION_CATEGORIA: Estadistica[] = [
  { etiqueta: 'Ciencia',   total: 120, color: '#06b6d4' },
  { etiqueta: 'Deporte',   total: 95,  color: '#f97316' },
  { etiqueta: 'Cultura',   total: 70,  color: '#ec4899' },
  { etiqueta: 'Académico', total: 50,  color: '#3b82f6' },
  { etiqueta: 'Solidario', total: 40,  color: '#22c55e' },
  { etiqueta: 'Ocio',      total: 25,  color: '#eab308' },
];

export const PARTICIPACION_CURSO: Estadistica[] = [
  { etiqueta: '1º ESO',   total: 64 },
  { etiqueta: '2º ESO',   total: 88 },
  { etiqueta: '3º ESO',   total: 75 },
  { etiqueta: '4º ESO',   total: 52 },
  { etiqueta: '1º Bach.', total: 38 },
  { etiqueta: '2º Bach.', total: 30 },
];
