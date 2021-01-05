class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        // super keyword is used to access and call functions on an object's parent
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        // reduce target res by power
        if (target instanceof Unit) {
            target.res -= this.power;
            console.log(`${target.name} decreased by ${this.power}.`);
            console.log(`Remaining Resilience is ${target.res}.`);
        } else {
            console.log("Target must be a unit!");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, stat, magnitude, text) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    // converting a data type into another is known as type casting
    cast(target) {
        // check if target is a unit
        if (target instanceof Unit) {
            if (this.stat == "res") {
                target.res += this.magnitude;
                if (this.magnitude > 0) {
                    //increasing res
                    console.log(`${target.name} resilience increased to ${target.res}.`)
                } else {
                    //decreaseing res
                    console.log(`${target.name} resilience decreased to ${target.res}.`)
                }
            } else if (this.stat == "power") {
                target.power += this.magnitude;
                if (this.magnitude > 0) {
                    //inc power
                    console.log(`${target.name} power increased to ${target.power}.`)
                } else {
                    //dec power
                    console.log(`${target.name} power decreased to ${target.power}.`)
                }
            } else {
                console.log("Effect failed.");
            }
        }
    }
}

// ----------Instance of Units ----------- //
const unit1 = new Unit("Red Belt Ninja", 3, 3, 4);
const unit2 = new Unit("Black Belt Ninja", 4, 5, 4);

// ----------Instance of Effects ----------- //
const effect1 = new Effect("Hard Algorithm", 2, "res", 3, "increase target's resilience by 3.");
const effect2 = new Effect("Unhandled Promise Rejection", 1, "res", -2, "reduce target's resilience by 2.");
const effect3 = new Effect("Pair Programming", 3, "power", 2, "increase target's power by 2.");

// ----------Instance of plays ----------- //
effect1.cast(unit1);
effect2.cast(unit1);
effect3.cast(unit1);
unit1.attack(unit2);


// play(target) {
//     if (target instanceof Unit) {
//         // implement card text here
//     } else {
//         throw new Error("Target must be a unit!");
//     }
// }

