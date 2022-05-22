import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  categoriaSeleccionada = 'general';
  paisSeleccionado = 'ch';

  categorias: any[] = [
    {value:'general', nombre: 'General'},
    {value:'business', nombre: 'Negocios'},
    {value:'entertainment', nombre: 'Entretenimiento'},
    {value:'health', nombre: 'Salud'},
    {value:'science', nombre: 'Ciencia'},
    {value:'sports', nombre: 'Deportes'},
    {value:'technology', nombre: 'Tecnologia'},
  ]
  paises: any[] = [
    {value:'ch', nombre: 'Chile'},
    {value:'ar', nombre: 'Argentina'},
    {value:'br', nombre: 'Brasil'},
    {value:'cl', nombre: 'Colombia'},
    {value:'mx', nombre: 'Mexico'},
    {value:'es', nombre: 'España'},
    {value:'eu', nombre: 'Estados Unidos'},
    {value:'ru', nombre: 'Reino Unido'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia(){
    console.log(this.categoriaSeleccionada);
    console.log(this.paisSeleccionado);
  }

}
