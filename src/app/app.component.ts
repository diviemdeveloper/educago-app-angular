import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  add, moonOutline, sunnyOutline, logOutOutline, mailOutline, lockClosedOutline, closeOutline,
  imageOutline, chevronBack,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    // Registramos una sola vez los iconos de Ionic que usa la app
    addIcons({
      add, moonOutline, sunnyOutline, logOutOutline, mailOutline, lockClosedOutline, closeOutline,
      imageOutline, chevronBack,
    });
  }
}
