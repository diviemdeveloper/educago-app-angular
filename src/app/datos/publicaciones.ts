import { Publicacion } from '../modelos/publicacion';

export const PUBLICACIONES: Publicacion[] = [
  {
    id: 1,
    eventoId: 1,
    autor: 'Lucía',
    rolAutor: 'Organizadora',
    destacado: '🏆 1.º puesto: Proyecto Energía Solar',
    texto: 'Menciones: Robótica y Reciclaje.',
    fotos: [
      { id: 1, color: '#67e8f9' },
      { id: 2, color: '#a5b4fc' },
      { id: 3, color: '#f9a8d4' },
    ],
    fecha: '2026-10-15T14:30',
  },
];
