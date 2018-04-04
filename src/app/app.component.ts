import { Component } from '@angular/core';

import { Celebrity } from './celebrity/celebrity.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  names: string[] = ['Arnold Schwarzenegger', 'Sylvester Stallone', 'Jean-claude van damme', 'Dwayne Johnson'];
  celebrities: Celebrity[];

  constructor() {
    this.celebrities = [
      new Celebrity('Arnold Schwarzenegger', 10500),
      new Celebrity('Sylvester Stallone', 10400),
      new Celebrity('Jean-claude van damme', 10300),
      new Celebrity('Dwayne Johnson', 10200)
    ];
  }

  addACelebrity(newName: HTMLInputElement, newReputation: HTMLInputElement) {
    if (!newName.value || !newReputation.value) {
      console.log(`We now adding celebrity, please input name and reputation`);
      return false;
    }

    console.log(`Adding celebrity with name: ${newName.value}, repulation: ${newReputation.value}`);
    const newCelebrity = new Celebrity(newName.value, +newReputation.value);
    this.celebrities.push(newCelebrity);

    newName.value = '';
    newReputation.value = '';
    return false;
  }

  sortedCelebrities(): Array<Celebrity> {
    const sorter = (a: Celebrity, b: Celebrity) => b.reputation - a.reputation;
    const sortedCelebrities = this.celebrities.sort(sorter);
    return sortedCelebrities;
  }
}
