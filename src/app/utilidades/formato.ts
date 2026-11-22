// Pequeñas funciones para mostrar fechas y colores como en el Figma.
// Las fechas llegan en formato ISO ('2026-10-15T10:00').

const DIAS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

const dosCifras = (n: number) => n.toString().padStart(2, '0');

/** '10:00' */
export function hora(iso: string): string {
  const f = new Date(iso);
  return `${dosCifras(f.getHours())}:${dosCifras(f.getMinutes())}`;
}

/** 'Jue 15' */
export function diaCorto(iso: string): string {
  const f = new Date(iso);
  return `${DIAS[f.getDay()]} ${f.getDate()}`;
}

/** '14 oct · 20:00' */
export function diaMesHora(iso: string): string {
  const f = new Date(iso);
  return `${f.getDate()} ${MESES[f.getMonth()]} · ${hora(iso)}`;
}

/** 'Jue 15 oct · 10:00–14:00' */
export function rangoEvento(inicio: string, fin: string): string {
  const f = new Date(inicio);
  return `${DIAS[f.getDay()]} ${f.getDate()} ${MESES[f.getMonth()]} · ${hora(inicio)}–${hora(fin)}`;
}

/** '15/10/2026 10:00' (o sin hora) */
export function fechaNumerica(iso: string, conHora = true): string {
  if (!iso) return '';
  const f = new Date(iso);
  const dia = `${dosCifras(f.getDate())}/${dosCifras(f.getMonth() + 1)}/${f.getFullYear()}`;
  return conHora ? `${dia} ${hora(iso)}` : dia;
}

/** Convierte '#06b6d4' en 'rgba(6, 182, 212, 0.2)' para los fondos suaves */
export function tinte(hex: string, opacidad = 0.2): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacidad})`;
}
