import {Component, EventEmitter, Output} from '@angular/core';
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
    bottomSheetRef.afterDismissed().subscribe((dataFromChild) => {
      console.log('OptionsComponent : openLink -- ' + dataFromChild)
      this.nbCartes.emit(dataFromChild)
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

  nbCartesReceived(value: number) {
    console.log('OppenedOptionComponent : nbCartesReceived -- ' + value)
    this._bottomSheetRef.dismiss(value);
  }

}

@Component({
  selector: 'app-memory-options-nbcards',
  templateUrl: './nbcards/nbcards.component.html',
})
export class NbcardsComponent {

  @Output()
  public nbCartes: EventEmitter<number> = new EventEmitter<number>();


  formatLabel(value: number) {
    return value;
  }

  openLink(value: MatSliderChange) {
    var valeur = 12;
    if(value.value !== null)
      valeur = value.value
    console.log('NbcardsComponent : openLink -- ' + valeur)
    this.nbCartes.emit(valeur)
  }

}