import { Injectable } from '@angular/core';
import { SeedysDiags } from '../../models/mocks/seedys-dialogs';

@Injectable()
export class SeedyService {

  seedysDiags = SeedysDiags;

  constructor() { }

  changeSeedysText(): number {
    const randomVal = Math.floor(Math.random() * (this.seedysDiags.length - 1)) + 1;
    // console.log(randomVal);
    return randomVal;
  }

  chooseSeedysText(): string {
    const diag = this.seedysDiags[this.changeSeedysText()];
    console.log(diag);

    if (diag !== this.seedysDiags[this.changeSeedysText()]) {
      return diag;
    }
  }

  setSeedyText(isClicked: boolean): string {
    if (isClicked === true) {
      return 'Noooon pitié !!! Stooop !!!!';
    } else {
      return this.chooseSeedysText();
    }
  }

}
