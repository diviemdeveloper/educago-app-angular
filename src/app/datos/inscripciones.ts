import { Inscripcion } from '../modelos/inscripcion';

export const INSCRIPCIONES: Inscripcion[] = [
  { id: 1, eventoId: 1, estudiante: 'Marta Ruiz', curso: '2º ESO', estado: 'CON_PLAZA', asistio: true },
  { id: 2, eventoId: 1, estudiante: 'Pablo Gil',  curso: '1º ESO', estado: 'CON_PLAZA', asistio: true },
  { id: 3, eventoId: 1, estudiante: 'Laura Sanz', curso: '3º ESO', estado: 'CON_PLAZA', asistio: false },
  { id: 4, eventoId: 1, estudiante: 'Hugo Vera',  curso: '2º ESO', estado: 'CON_PLAZA', asistio: true },
  { id: 5, eventoId: 1, estudiante: 'Nuria Paz',  curso: '3º ESO', estado: 'CON_PLAZA', asistio: false },
  { id: 6, eventoId: 1, estudiante: 'Ana Lora',   curso: '1º ESO', estado: 'EN_ESPERA', posicionEspera: 1, asistio: false },
  { id: 7, eventoId: 1, estudiante: 'Iker Mora',  curso: '2º ESO', estado: 'EN_ESPERA', posicionEspera: 2, asistio: false },

  { id: 8,  eventoId: 3, estudiante: 'Leo Martín',  curso: '3º ESO',   estado: 'CON_PLAZA', asistio: false },
  { id: 9,  eventoId: 3, estudiante: 'Sara Ortiz',  curso: '4º ESO',   estado: 'CON_PLAZA', asistio: false },
  { id: 10, eventoId: 3, estudiante: 'Dani Prieto', curso: '1º Bach.', estado: 'EN_ESPERA', posicionEspera: 1, asistio: false },
];
