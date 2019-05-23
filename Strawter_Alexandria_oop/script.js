//Create a parent class
class Wizard {
  //Add a Constructor to parent class
  constructor(name, race, level) {
    // Add at least one property

    /*Encapsulation was used by making the properties private thru the use of an underscor5e.*/
    this._name = name;
    this._race = race;
    this._level = level;
  }

  //and one method to the parent class
  getASI(){
    if (this._level % 4 == 0) {
      return "Congratulations, you gained an ability score improvement!"
    }else{
      return "You have not gained an ability score improvement yet."
    }
  }
}
//Instantiate at least one object from the parent class (super class)
let terra = new Wizard("Terra Boul", "Teifling", 5);
console.log(terra);
console.log(terra.getASI());

//Create at least one class extended

/*Inheritance was used by creating a subclass from the wizard class*/
class Necromancy extends Wizard {
  constructor(name, race, level,familiar) {
    super(name, race, level);
    //Add at least one property
    this.familiar = familiar;
  }

  //and one method
  getNecroSpell(){
    return 'Learned the cantrip: Chill Touch!';
  }

  /*Polymorphism allows us to call getASI from the subclass*/
  getASI(){
    //Run/Call a method from your parent class
    return super.getASI();
  }
}
//Instantiate at least one object from the child class
let luke = new Necromancy("Luke", "Aasimar", 8, "Dire Wolf");
console.log(luke);
console.log(luke.getNecroSpell());
console.log(luke.getASI());
