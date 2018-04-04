export class Celebrity {
  id: number;
  name: string;
  reputation: number;

  constructor(
    name?: string,
    reputation?: number,
    id?: number
  ) {
    this.id = id || (new Date()).getSeconds();
    this.name = name;
    this.reputation = reputation || 1000;
  }

  voteUp() {
    this.reputation++;
  }

  voteDown() {
    this.reputation--;
  }
}
