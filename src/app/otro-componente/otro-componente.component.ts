import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno';
import { ALUMNOS } from './mocks';

@Component({
  selector: 'app-otro-componente',
  templateUrl: './otro-componente.component.html',
  styleUrls: ['./otro-componente.component.css']
})
export class OtroComponenteComponent implements OnInit {

  //constructor() { }
  alumnos: Alumno[];
  ngOnInit() {
    this.alumnos = ALUMNOS;
  }

}
