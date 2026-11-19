export interface Lugar {
  id: number;
  nombre: string;
  aforoMaximo: number;
  icono: string;          // emoji
  ocupadoHoy: boolean;    // ¿hay algún evento hoy en este lugar?
}
