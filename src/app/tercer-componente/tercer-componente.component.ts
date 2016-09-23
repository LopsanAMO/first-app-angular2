import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { PRODUCTO } from './productosData';

@Component({
  selector: 'app-tercer-componente',
  templateUrl: './tercer-componente.component.html',
  styleUrls: ['./tercer-componente.component.css']
})
export class TercerComponenteComponent implements OnInit {

  productos: Producto[];
  ngOnInit() {
    this.productos = PRODUCTO;
  }
  addProduct(producto){
    if(producto.quantity < producto.stock) producto.quantity ++
  }
  removeProduct(producto){
    if(producto.quantity > 0) producto.quantity --
  }
}
