import User from './User';

export default class Game {
  constructor(hero) {
    this.user = new User(hero);
    this.turn = 1;
    this.globalEvent = [];
  }

  createEvent(event) {
    this.globalEvent.push(event);
  }

  nextTurn() {
    this.turn += 1;
  }
}
