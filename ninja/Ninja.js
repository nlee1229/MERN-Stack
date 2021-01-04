class Ninja {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }

  sayName() {
    console.log(`Your ninjas name is ${this.name}.`);
  }

  showStats() {
    console.log(
      `Your ninjas stats are... Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}.`
    );
  }

  drinkSake() {
    this.health += 10;
    console.log(`Current health: ${this.health}.`);
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }

  showSenseiStats() {
    console.log(
      `Sensei stats are... Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}.`
    );
  }

  speakWisdom() {
    super.drinkSake();
    console.log('You are ALWAYS learning as a programmer.');
  }
}

const sensei1 = new Sensei('Eden');
sensei1.showSenseiStats();
sensei1.speakWisdom();

const ninja1 = new Ninja('Hyabusa', 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
