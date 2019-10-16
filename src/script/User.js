import Hero from './Hero';

export default class User {
  constructor({
    id, title, move, health, skillsCards, body, mind, spirit, tokens, startMoney,
  }) {
    this.heroId = id;
    this.hero = new Hero(health, move, skillsCards, body, mind, spirit);
    this.name = title;

    this.learnedSkills = [];
    this.skills = [];
    this.items = [];
    this.tokens = tokens;

    this.money = startMoney;
  }
}
