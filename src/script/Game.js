import User from './User';

export default class Game {
  constructor(hero) {
    this.user = new User(hero);
    this.turn = 1;
    this.globalEvent = null;
  }
}
