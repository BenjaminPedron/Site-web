import { Component, OnInit } from '@angular/core';
import { CardData } from './card/game-card/carddata';
import {MatDialog} from '@angular/material/dialog/';
import { RestartDialogComponent } from './restart-dialog/restart-dialog/restart-dialog.component';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {

  nbCards: number;
  nombreLignes: string = ""
  nombreColonnes: string = ""

  /* La liste des identifiants d'image */
  //TODO Les récupérer en random sur unsplash (récupérer le nombre de cartes choisis par l'utilisateur)
  /* https://unsplash.com/developers */
  cardImages = [
    'pDGNBK9A0sk',
    'fYDrhbVlV1E',
    'qoXgaF27zBc',
    'b9drVB7xIOI',
    'TQ-q5WAVHj0'
  ];

  /* Les cartes du jeu */
  cards: CardData[] = [];

  /* Les cartes retournées */
  flippedCards: CardData[] = [];

  /* Variable stockant le nombre de duo trouvés */
  matchedCount = 0;

  /* Méthode servant à mélanger les cartes */
  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  constructor(private dialog: MatDialog) {
    this.nbCards = 5

  }

  ngOnInit(): void {
    console.log('init')
    this.setupCards();
  }

  setupCards(): void {
    this.cards = [];

    var listeDiviseur = [];
    var listeQuotient = [];
    var diviseur: number = 0;
    var nbLig: number = 0;
    var nbCol: number = 0;

    var realnb = this.nbCards * 2
    while (diviseur < realnb){
      diviseur = diviseur+  1; //On regarde si chaque nombre entre 1 et le nbDeCartes sont des diviseurs
      if (realnb % diviseur === 0){ //Si c'est un diviseur du nbDeCartes soit que le reste est égale à 0
        listeDiviseur.push(diviseur); //on stocke les valeurs du diviseur et du quotient dans une liste
        listeQuotient.push(realnb/diviseur);
      }
    }

    var minimum= realnb; 
  
    for (let i = 0; i < listeDiviseur.length; i++){ //Donc pour chaque diviseur
      if(Math.abs(listeDiviseur[i] - listeQuotient[i]) <= minimum){ //on calcul la distance entre lui et son quotient, puis on le compare au minimum, si c'est plus petit que le minimum alors:
       
        minimum=Math.abs(listeDiviseur[i] - listeQuotient[i]); //le minimum prend la valeur de la distance entre le diviseur et le quotient
        
        nbLig=listeQuotient[i]; //le nbDeLignes est égale au quotient
        nbCol=listeDiviseur[i]; //le nbDeColonnes est égale au diviseur
      }
    }

    this.nombreColonnes = "repeat(" + nbCol + ", 150px)";
   
    this.nombreLignes = "repeat(" + nbLig + ", 100)";

    var i = 0
    this.cardImages.forEach((image) => {
      if(i < this.nbCards) {
        const cardData: CardData = {
          imageId: image,
          state: 'initial',
        };
        this.cards.push({ ...cardData });
        this.cards.push({ ...cardData });
      }
      i++
    });
    this.cards = this.shuffleArray(this.cards);
    console.log(this.cards)
    setTimeout(() => {}, 200)
  }

  cardClicked(index: number): void {
    const cardInfo = this.cards[index];

    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length > 1) {
        this.checkForCardMatch();
      }

    } else if (cardInfo.state === 'flipped') {
      cardInfo.state = 'default';
      this.flippedCards.pop();

    }
  }

  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState = cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;

      this.flippedCards = [];

      if (nextState === 'matched') {
        this.matchedCount++;
        if (this.matchedCount === this.nbCards) {
          let dialogRef = this.dialog.open(RestartDialogComponent, {
            disableClose: true,
            width: '250px'
          });

          dialogRef.afterClosed().subscribe(() => {
            this.restart();
          });
        }
      }
    }, 1000);
  }

  restart(): void {
    this.matchedCount = 0;
    this.setupCards();
  }

  majNbCartes(value: number) {
    this.nbCards = value / 2
    this.restart()
  }

  openedOptions() {
    this.cards.forEach(card => {
      card.state = 'initial'
    });
  }

  startGame() {
    this.cards.forEach(card => {
      card.state = 'default'
    });
  }

}
