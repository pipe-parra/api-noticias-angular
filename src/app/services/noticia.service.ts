import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor() { }

  getNoticias(parametros:any){
    const URL = 'https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=a4bd01aa54b647eb929743654fc7d633';
  }
}
