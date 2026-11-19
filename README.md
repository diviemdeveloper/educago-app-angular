# EducaGo · App (Angular + Ionic) — Entrega 1

**EducaGo** es la app con la que la dirección y los organizadores de un centro educativo gestionan los eventos del centro: crear y publicar eventos, controlar el aforo de cada lugar, pasar lista, consultar el historial de cambios, publicar resultados y ver informes de participación.

Esta entrega es la **maqueta navegable** del diseño de Figma: todas las pantallas, rutas, componentes propios, tema y modo oscuro, con **datos de maqueta** (sin API). En la entrega 2 se conectará con el backend Spring Boot de EducaGo (`EDUCAGO-main`); los modelos de `src/app/modelos/` ya usan los mismos campos que sus entidades.

- Ionic + Angular con **componentes standalone**, creado con el CLI (`ionic start educago-app blank --type=angular`).
- Estilo iOS forzado en todos los dispositivos (`provideIonicAngular({ mode: 'ios' })`).

## Cómo arrancarlo

```bash
npm install
ionic serve            # http://localhost:8100  (F12 → Ctrl+Shift+M para verlo como móvil)
```

En Android (Capacitor):

```bash
ionic build
npx cap add android    # solo la primera vez
npx cap sync
npx cap run android
```

## Capturas

> Añade aquí las capturas de **todas las pantallas en modo claro y oscuro** (el interruptor 🌙 está en el Panel).

| Pantalla | Claro | Oscuro |
|---|---|---|
| Login | `capturas/login.png` | `capturas/login-oscuro.png` |
| Panel | `capturas/panel.png` | `capturas/panel-oscuro.png` |
| Eventos (Todos / Borrador / Publicado / Finalizado) | … | … |
| Detalle del evento | … | … |
| Nuevo / Editar evento | … | … |
| Pasar lista | … | … |
| Historial de cambios | … | … |
| Resultados | … | … |
| Lugares | … | … |
| Informes | … | … |
| 404 | … | … |

## Paleta de colores

| Rol | Color | Uso |
|---|---|---|
| primary · Violeta | `#6D28D9` | Botones, pestaña activa, enlaces, barras por curso |
| Texto · Noche | `#1E1B4B` | Títulos y textos |
| Fondo · Lavanda | `#F5F3FF` | Fondo de todas las pantallas |
| Superficie | `#FFFFFF` | Tarjetas y listas |
| Violeta suave | `#EDE9FE` | Píldora del menú, chips de cursos, pista de barras |
| Gris | `#6B7280` | Textos secundarios |
| OK | `#DCFCE7` / `#166534` | Publicado, Libre, plazas, asistencia |
| Aviso | `#FEF3C7` / `#92400E` | Borrador, Completo, Requiere atención, lista de espera |
| Error | `#FEE2E2` / `#991B1B` · `#DC2626` | Ocupado hoy, Cancelar, Eliminar |

Colores de categoría: Ciencia `#06B6D4` · Cultura `#EC4899` · Deporte `#F97316` · Académico `#3B82F6` · Solidario `#22C55E` · Ocio `#EAB308`.

Modo oscuro: fondo `#120F26`, superficie `#1B1838`, texto `#EDE9FE`, primary `#A78BFA`.

Todo está en `src/theme/variables.scss` (variables `--ion-…` de Ionic y `--app-…` propias).

## Tipografía

- **Poppins** (400, 500, 600, 700) — la del Figma, para títulos y textos. Instalada con `npm install @fontsource/poppins`, así va dentro de la app y funciona sin internet.

## Árbol de rutas

```
/                               → redirige a /login
/login                          LoginPage                (fuera del menú)
/app                            TabsPage                 (menú inferior)
 ├─ /app/panel                  PanelPage
 ├─ /app/eventos                EventosPage
 ├─ /app/eventos/:id            EventoDetallePage        (detalle con id, con menú)
 ├─ /app/lugares                LugaresPage
 ├─ /app/informes               InformesPage
 └─ /app                        → redirige a /app/panel
/eventos/nuevo                  EventoFormPage           (pantalla completa, sin menú)
/eventos/:id/editar             EventoFormPage           (pantalla completa, sin menú)
/eventos/:id/asistencia         PasarListaPage           (pantalla completa, sin menú)
/eventos/:id/historial          HistorialPage            (pantalla completa, sin menú)
/eventos/:id/resultados         ResultadosPage           (pantalla completa, sin menú)
/**                             NoEncontradaPage         (404, siempre la última)
```

Las pantallas de formulario, pasar lista, historial y resultados van **a pantalla completa** porque así aparecen en el Figma (sin menú inferior, con botón atrás arriba): son tareas de "modo concentración", igual que Notificaciones en el manual. Las rutas fijas (`nuevo`) están antes que las de `:id`.

## Árbol de componentes

```
AppComponent
└─ ion-router-outlet
   ├─ LoginPage
   ├─ TabsPage (ion-tabs · 4 pestañas)
   │  ├─ PanelPage
   │  │  ├─ app-cabecera-pagina   (ng-content: botones modo oscuro / salir)
   │  │  ├─ app-tarjeta-stat ×4
   │  │  ├─ app-estado-vacio
   │  │  └─ app-tarjeta-evento    (ng-content [insignia])
   │  │     ├─ app-icono-categoria
   │  │     └─ app-chip-estado (proyectado)
   │  ├─ EventosPage              (ion-segment, ion-fab)
   │  │  ├─ app-cabecera-pagina
   │  │  ├─ app-tarjeta-evento → app-icono-categoria + app-chip-estado
   │  │  └─ app-estado-vacio      (ng-content: botón "Ver todos")
   │  ├─ EventoDetallePage        (ion-list, ion-back-button)
   │  │  ├─ app-chip-estado
   │  │  └─ app-estado-vacio
   │  ├─ LugaresPage              (ion-list, ion-modal)
   │  │  ├─ app-cabecera-pagina
   │  │  ├─ app-icono-categoria
   │  │  ├─ app-chip-estado
   │  │  └─ app-estado-vacio
   │  └─ InformesPage
   │     ├─ app-cabecera-pagina
   │     ├─ app-campo-fecha ×2    (ion-modal + ion-datetime)
   │     ├─ app-barra-progreso
   │     └─ app-estado-vacio
   ├─ EventoFormPage              (ion-input, ion-textarea, ion-select, chips, file)
   │  └─ app-campo-fecha ×3
   ├─ PasarListaPage              (ion-searchbar, ion-list, ion-toggle, ion-toast)
   │  └─ app-estado-vacio
   ├─ HistorialPage
   │  └─ app-estado-vacio
   ├─ ResultadosPage              (ion-card, ion-modal)
   │  └─ app-estado-vacio
   └─ NoEncontradaPage
```

### Componentes propios (`src/app/componentes/`)

| Componente | Entradas (`input()` / `model()`) | Notas |
|---|---|---|
| `app-tarjeta-evento` | `evento`, `conHora` | `ng-content select="[insignia]"` |
| `app-chip-estado` | `estado`, `texto` | `@switch` según el estado |
| `app-icono-categoria` | `icono`, `color`, `tamano` | Cuadrado de color suave con emoji |
| `app-tarjeta-stat` | `valor`, `etiqueta`, `color` | Cifras del Panel |
| `app-barra-progreso` | `etiqueta`, `valor`, `maximo`, `color`, `variante` | Barras de informes |
| `app-estado-vacio` | `icono`, `titulo`, `texto` | `ng-content` para un botón |
| `app-cabecera-pagina` | `titulo`, `subtitulo` | `ng-content` para botones |
| `app-campo-fecha` | `valor` (`model`), `presentacion`, `estilo`, `etiqueta` | Abre `ion-modal` con `ion-datetime` |

## Estructura

```
src/app/
├─ app.routes.ts      el mapa de la app
├─ modelos/           interfaces (Evento, Lugar, Categoria, Curso, Inscripcion, CambioEvento, Publicacion…)
├─ datos/             datos de maqueta (los del Figma)
├─ utilidades/        formato de fechas y colores
├─ componentes/       piezas reutilizables
└─ paginas/           una carpeta por pantalla
```

## Checklist de requisitos mínimos

- [x] Proyecto Ionic + Angular con componentes standalone.
- [x] Login fuera del menú; al entrar y salir se usa `routerDirection="root"`.
- [x] Menú inferior con 4 pestañas, personalizado (píldora violeta en la activa).
- [x] Página de detalle con `:id` (`/app/eventos/:id`) y `withComponentInputBinding()`.
- [x] Pantallas completas sin menú y página 404.
- [x] Modelos (`interface`) y datos de maqueta en carpetas propias.
- [x] 8 componentes propios con `input()`; tres con `ng-content`.
- [x] `@for`, `@if`, `@switch` (y `@empty` en todas las listas).
- [x] Lista, tarjeta, chip, segmento, buscador, formulario con +4 tipos de campo, modal y botón flotante.
- [x] Tema propio, componentes de Ionic modificados y modo oscuro.
- [ ] Fotos reales con licencia y créditos → ver `CREDITOS.md`.
- [x] Estados vacíos en las listas.
- [ ] Probada en Android (vídeo de 2–3 minutos).
