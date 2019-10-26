/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

function monkeyGenerator(name, species, food) {
  var monkey = {
    name: name,
    species: species,
    foodsEaten: [],
    eatSomething: function eatSomething(food) {
      this.foodsEaten.push(food);
    },
    introduce: function introduce() {
      return `Hey! My name is ${this.name}. I'm a ${this.species} monkey and I had a yummy ${this.foodsEaten} for dinner last night :)`;
    }
  };

  monkey.eatSomething(food);
  console.log(monkey.introduce());
  console.log("monkey's name: ", monkey.name);
  console.log("monkey's species: ", monkey["species"]);
  console.log("*************************************");
}

const firstMonkey = monkeyGenerator("Albert", "Squirrel", "banana");
const secondMonkey = monkeyGenerator("King Kong", "Proboscis", "small lizard");
const thirdMonkey = monkeyGenerator("Bion", "Pygmy Marmoset", "bird's egg");
