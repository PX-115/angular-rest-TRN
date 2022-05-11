import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { CardModel } from '../models/card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  card: CardModel = new CardModel('', '', 0, [], 0, 0, '');
  // Cria um Array que comporta qualquer (any) tipo; essa estrutura irá receber o retorno da chamada (GET)
  cards: Array<any> = new Array();
  // Importa o serviço de "Cards" criado na pasta acima
  constructor(private cardsService: CardsService) {}
  // Chama a listagem sempre que a tela for iniciada
  ngOnInit(): void {
    this.listarCards();
  }

  listarCards() {
    this.cardsService.listarCards().subscribe(
      (cards) => {
        // Atribui retorno ao Array
        this.cards = cards;
      },
      (err) => {
        console.log('Erro ao buscar os cards - ' + err);
      }
    );
  }

  adicionarCard() {
    this.cardsService.adicionarCards(this.card).subscribe(
      (cards) => {
        this.card = new CardModel('', '', 0, [], 0, 0, '');
        this.listarCards();
      },
      (err) => {
        console.log('Erro ao adicionar card - ' + err);
      }
    );
  }
}
