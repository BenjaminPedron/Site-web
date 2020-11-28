import { Component } from '@angular/core';

@Component({
  selector: 'app-memory-options-nbcards',
  templateUrl: './nbcards.component.html',
  styleUrls: ['./nbcards.component.css']
})
export class NbcardsComponent {

  formatLabel(value: number) {
    return value;
  }

}
