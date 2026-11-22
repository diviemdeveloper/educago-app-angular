import { Categoria } from './categoria';
import { Curso } from './curso';
import { Lugar } from './lugar';

// Mismos valores que el enum EstadoEvento del backend
export type EstadoEvento = 'BORRADOR' | 'PUBLICADO' | 'FINALIZADO' | 'CANCELADO';

export interface Evento {
  id: number;
  titulo: string;
  descripcion: string;
  requisitos: string;               // separados por comas: "Traer bata, Autorización firmada"
  inicio: string;                   // fecha y hora en formato ISO: '2026-10-15T10:00'
  fin: string;
  fechaLimiteInscripcion: string;
  estado: EstadoEvento;
  aforoMaximo: number;
  lugar: Lugar;
  categoria: Categoria;
  organizador: string;
  cursos: Curso[];                  // vacío = todo el centro
  inscritos: number;                // personas con plaza
  enEspera: number;                 // personas en lista de espera
  seguidores: number;               // marcaron "me interesa"
  cartel?: string;                  // la ? indica que es opcional
}
