import Hero from './Hero';

export default class User {
  constructor({
    id, title, move, health, skillsCards, force, magic, tokens,
  }) {
    this.heroId = id;
    this.hero = new Hero(health, move, skillsCards, force, magic);
    this.name = title;

    this.learnedSkills = [];
    this.skills = [];
    this.items = [];
    this.tokens = tokens;

    this.money = 2;
  }
}
