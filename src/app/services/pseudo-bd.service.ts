// O Serviço é o módulo que está mais próximo ao banco de dados. Nelee starão implementados os metodos que acessam o banco de dados.

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PseudoBdService {

  public data_on_database: any

  constructor() {
    this.data_on_database = [
      {
      titulo: "Avião cai no mar mediterrâneo",
      conteudo: 'Avião cai no mar e mata 255 pessoas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quia dolorem perferendis ullam expedita blanditiis nostrum, consectetur excepturi itaque officia commodi accusantium quae architecto veniam ipsam. Repellat ipsa animi dignissimos.',
      imagePath:'./assets/img/template/card-template.jpg',
      data:'17/07/2019'
      },
      {
        titulo: "Osso de dinossauro encontrado no Rio Tietê",
        conteudo: 'Fóssil de criatura pré-história encontrado por morador de rua. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quia dolorem perferendis ullam expedita blanditiis nostrum, consectetur excepturi itaque officia commodi accusantium quae architecto veniam ipsam. Repellat ipsa animi dignissimos.',
        imagePath:'./assets/img/template/card-template.jpg',
        data:'17/07/2015'
      },
      {
        titulo: "Idosa de 75 anos mata bandido que tentou roubar sua residência",
        conteudo: 'Senhora aposentada que possui porte de arma dá lição em infrator. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quia dolorem perferendis ullam expedita blanditiis nostrum, consectetur excepturi itaque officia commodi accusantium quae architecto veniam ipsam. Repellat ipsa animi dignissimos.',
        imagePath:'./assets/img/template/card-template.jpg',
        data:'17/07/2018'
      },
      {
        titulo: "Carrinho de bebê usado para contrabandear carne de porco em sinagoga judaica",
        conteudo: 'Terroristas da seita dos iluminati tentam corromper membros da fé. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quia dolorem perferendis ullam expedita blanditiis nostrum, consectetur excepturi itaque officia commodi accusantium quae architecto veniam ipsam. Repellat ipsa animi dignissimos.',
        imagePath:'./assets/img/template/a.jpg',
        data:'17/07/2016'
      }
    ]
  }
}
