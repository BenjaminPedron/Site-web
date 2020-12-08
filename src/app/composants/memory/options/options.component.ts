import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { MatSliderChange } from '@angular/material/slider';
import { MemoryComponent } from '../memory.component';


@Component({
  selector: 'app-options',
  templateUrl: 'options.component.html',
})
export class OptionsComponent {
  constructor(private _bottomSheet: MatBottomSheet, public _memory: MemoryComponent) {}

  @Output()
  public nbCartes: EventEmitter<number> = new EventEmitter<number>();

  openBottomSheet(): void {
    const bottomSheetRef = this._bottomSheet.open(OppenedOptionComponent);

    bottomSheetRef.afterDismissed().subscribe( () => {
        this.nbCartes.emit(NbcardsComponent.value)
        console.log("Données envoyées")
    });
  }
}

@Component({
  selector: 'app-memory-oppened-options',
  templateUrl: 'opennedoptions.html',
})
export class OppenedOptionComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<OppenedOptionComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  send() {
    this._bottomSheetRef.dismiss();
  }

}

@Component({
  selector: 'app-memory-options-nbcards',
  templateUrl: './nbcards/nbcards.component.html',
})
export class NbcardsComponent {

  /**
   * La variable sortante nous permettant de prévenir le composant parent d'un changement
   * @see OppenedOptionComponent
   */
  @Output()
  public nbCartes: EventEmitter<number> = new EventEmitter<number>();

  /* Variable de classe mémorisant l'état du slider */
  static value: number = 10

  /**
   * Fonction d'affichage
   */
  display() { return NbcardsComponent.value }

  /**
   * Fonction d'affichage dynamique de l'info-bulle
   * @param value la valeure actuelle 
   */
  formatLabel(value: number) { return value }

  /**
   * Fonction écoutant les changement émis par le slider et modifiant la valeur stockée en mémoire
   * @param slider Un simple événement de changement émis par le composant MatSlider
   * @see MatSliderChange
   */
  onChange(slider: MatSliderChange) {
    if(slider.value) NbcardsComponent.value = slider.value
    this.nbCartes.emit(NbcardsComponent.value)

    console.log('Mémorisation de la nouvelle valeur du slider / nombre de cartes')
  }

}