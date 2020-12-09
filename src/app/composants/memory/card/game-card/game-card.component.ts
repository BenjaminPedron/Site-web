import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardData } from './carddata';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('*', style({
        opacity: 0
      })),
      state('initial', style({
        transform: 'scale(0.50)',
        opacity: 0.10
      })),
      state('default', style({
        transform: 'none',
      })),
      state('flipped', style({
        transform: 'perspective(600px) rotateY(180deg)'
      })),
      state('matched', style({
        transform: 'scale(0.50)',
        opacity: 0.10
      })),
      /* A l'instanciation de la carte */
      transition('* => initial', [
        animate('400ms')
      ]),
      /* Au lancement de la partie */
      transition('initial => default', [
        animate('200ms')
      ]),
      /* A l'ouverture des options */
      transition('default => initial', [
        animate('200ms')
      ]),
      /* Quand on retourne une carte */
      transition('default => flipped', [
        animate('200ms')
      ]),
      /* Quand le joueur ne match pas */
      transition('flipped => default', [
        animate('200ms')
      ]),
      /* Quand le joueur match */
      transition('* => matched', [
        animate('400ms')
      ]),
    ])
  ]
})
export class GameCardComponent implements OnInit {

  @Input() data!: CardData;

  @Output() cardClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}