import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules,
         withComponentInputBinding } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // Mismo aspecto (iOS) en todos los móviles y botón atrás en español
    provideIonicAngular({ mode: 'ios', backButtonText: 'Atrás' }),
    // withComponentInputBinding(): el :id de la dirección llega a la página como input()
    provideRouter(routes, withPreloading(PreloadAllModules), withComponentInputBinding()),
  ],
});
