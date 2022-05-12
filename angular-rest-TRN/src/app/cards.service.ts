import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardModel } from './models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  // Importa o componente (HttpClient) que vai realizar as chamadas Http
  constructor(private http: HttpClient) {}

  // Observables fornecem suporte para passar mensagens entre partes do seu aplicativo.
  // Eles são uma técnica para manipulação de eventos, programação assíncrona e manipulação de vários valores.
  // Observables ​​são declarativos — ou seja, você define uma função para publicar valores, mas ela não é executada até que um consumidor a assine.
  // O consumidor inscrito recebe notificações até que a função seja concluída ou até que ele cancele a inscrição.
  // A API para receber valores é a mesma, independentemente de os valores serem entregues de forma síncrona ou assíncrona.
  // Como a lógica de configuração e desmontagem são tratadas pelo Observable, o código do aplicativo só precisa se preocupar em assinar os valores de consumo e, quando terminar, cancelar a assinatura.
  // Se o fluxo foi pressionamento de tecla, uma resposta HTTP ou um temporizador de intervalo, a interface para ouvir os valores e parar a escuta é a mesma.

  listarCards(): Observable<any> {
    return this.http.get('http://localhost:3000/cards');
  }

  adicionarCards(card: CardModel): Observable<any> {
    return this.http.post('http://localhost:3000/cards/', card);
  }

  atualizarCards(id: any, card: CardModel): Observable<any> {
    return this.http.put('http://localhost:3000/cards/'.concat(id), card);
  }
}
