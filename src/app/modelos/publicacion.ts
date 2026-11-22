export interface FotoPublicacion {
  id: number;
  url?: string;       // foto real (opcional)
  color: string;      // color de la miniatura mientras no hay foto
}

export interface Publicacion {
  id: number;
  eventoId: number;
  autor: string;
  rolAutor: string;
  destacado: string;  // "🏆 1.º puesto: Proyecto Energía Solar"
  texto: string;
  fotos: FotoPublicacion[];
  fecha: string;      // ISO
}
