// Igual que la entidad Categoria del backend (Spring Boot)
export interface Categoria {
  id: number;
  nombre: string;
  icono: string;     // emoji que la representa
  color: string;     // color en hexadecimal (#06b6d4)
}
