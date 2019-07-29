// O Serviço é o módulo que está mais próximo ao banco de dados. Nele starão implementados os metodos que acessam o banco de dados.

// Um serviço é usado para acessar o backend de uma aplicação

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PseudoBdService { }
