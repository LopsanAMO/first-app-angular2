import { Component } from '@angular/core';
import { ComponenteAngular2Component } from './componente-angular2/componente-angular2.component';
import { OtroComponenteComponent } from './otro-componente/otro-componente.component';
import { TercerComponenteComponent } from './tercer-componente/tercer-componente.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hola mundo!';
  hola = 'que pedorro';
}
