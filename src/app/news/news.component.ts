import { Component, OnInit, Input } from '@angular/core';

import { News } from './news.model'; //Importa a representação do dados "Model"
import { NewsService } from './news.service'; //Importa o serviço que acessa o banco de dados "Service"

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  //@Input significa que a variável news podera exibir seu conteudo em um template html
  news: News[];

  /*Declara uma instância do serviço no construtor */
  constructor(private news_service: NewsService) { }

  // Inicialzia o componente e busca todas as noticias do banco de dados
  ngOnInit() {
    this.news = this.news_service.allNews();
  }

}
