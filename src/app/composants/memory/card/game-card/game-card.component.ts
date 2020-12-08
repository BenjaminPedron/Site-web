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
      state('test', style({
        visibility: 'false',
        transform: 'scale(0.90)',
        opacity: 0.05
      })),
      state('default', style({
        transform: 'none',
      })),
      state('flipped', style({
        transform: 'perspective(600px) rotateY(180deg)'
      })),
      state('matched', style({
        visibility: 'false',
        transform: 'scale(0.90)',
        opacity: 0.05
      })),
      transition('test => default', [
        animate('200ms')
      ]),
      transition('default => flipped', [
        animate('200ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ]),
      transition('* => matched', [
        animate('400ms')
      ])
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