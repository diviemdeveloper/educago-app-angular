import { Lugar } from '../modelos/lugar';

export const LUGARES: Lugar[] = [
  { id: 1, nombre: 'Salón de actos', aforoMaximo: 300, icono: '🎭', ocupadoHoy: false },
  { id: 2, nombre: 'Gimnasio',       aforoMaximo: 150, icono: '🏀', ocupadoHoy: true },
  { id: 3, nombre: 'Biblioteca',     aforoMaximo: 60,  icono: '📚', ocupadoHoy: false },
  { id: 4, nombre: 'Patio',          aforoMaximo: 500, icono: '🌳', ocupadoHoy: false },
  { id: 5, nombre: 'Laboratorios',   aforoMaximo: 60,  icono: '🧪', ocupadoHoy: true },
];
