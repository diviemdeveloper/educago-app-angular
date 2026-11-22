import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // ── Fuera del menú ──────────────────────────────────────────
  { path: 'login',
    loadComponent: () => import('./paginas/login/login.page').then(m => m.LoginPage) },

  // ── Dentro del menú (TabsPage) ──────────────────────────────
  { path: 'app',
    loadComponent: () => import('./paginas/tabs/tabs.page').then(m => m.TabsPage),
    children: [
      { path: 'panel',
        loadComponent: () => import('./paginas/panel/panel.page').then(m => m.PanelPage) },
      { path: 'eventos',
        loadComponent: () => import('./paginas/eventos/eventos.page').then(m => m.EventosPage) },
      { path: 'eventos/:id',
        loadComponent: () => import('./paginas/evento-detalle/evento-detalle.page').then(m => m.EventoDetallePage) },
      { path: 'lugares',
        loadComponent: () => import('./paginas/lugares/lugares.page').then(m => m.LugaresPage) },
      { path: 'informes',
        loadComponent: () => import('./paginas/informes/informes.page').then(m => m.InformesPage) },
      { path: '', redirectTo: 'panel', pathMatch: 'full' },
    ],
  },

  // ── Pantalla completa, sin menú (así aparecen en el Figma) ──
  // Las rutas fijas ("nuevo") van SIEMPRE antes que las que llevan :id
  { path: 'eventos/nuevo',
    loadComponent: () => import('./paginas/evento-form/evento-form.page').then(m => m.EventoFormPage) },
  { path: 'eventos/:id/editar',
    loadComponent: () => import('./paginas/evento-form/evento-form.page').then(m => m.EventoFormPage) },
  { path: 'eventos/:id/asistencia',
    loadComponent: () => import('./paginas/pasar-lista/pasar-lista.page').then(m => m.PasarListaPage) },
  { path: 'eventos/:id/historial',
    loadComponent: () => import('./paginas/historial/historial.page').then(m => m.HistorialPage) },
  { path: 'eventos/:id/resultados',
    loadComponent: () => import('./paginas/resultados/resultados.page').then(m => m.ResultadosPage) },

  // ── Cualquier otra dirección: SIEMPRE LA ÚLTIMA ──────────────
  { path: '**',
    loadComponent: () => import('./paginas/no-encontrada/no-encontrada.page').then(m => m.NoEncontradaPage) },
];
