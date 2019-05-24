//JS ECMA 6 Class Structure

/*CLASSES && SUBCLASSES*/
class Player{
  constructor(name,classes,hp,mp,dmg) {
    this._name = name;
    this._classes = classes;
    this._hp = hp;
    this._mp = mp;
    this._dmg = dmg;
  }

  get name() {return this._name;}
  set name(value) {this._name = value;}

  get classes() {return this._classes;}
  set classes(value) {this._classes = value;}

  get hp() {return this._hp;}
  set hp(value) {this._hp = value;}

  get mp() {return this._mp;}
  set mp(value) {this._mp = value;}

  get dmg() {return this._dmg;}
  set dmg(value) {this._dmg = value;}

  rangeDamage(){
    var rgD = Math.floor(Math.random() * 4) + 1;
    return rgD;
  }
}

class Weapons{
  constructor(wName,att){
    this._wName = wName;
    this._att = att;
  }

  get wName() {return this._wName;}
  set wName(value) {this._wName = value;}

  get att() {return this._att;}
  set att(value) {this._att = value;}

  showAtt(){
    return "You are attacking!\n";
  }

  getAtt(){
    //Use of Math Object
    var attack = Math.floor(Math.random() * this._att) + 1;
    return attack;
  }
}

//Inheritance
class Melee extends Weapons{
  constructor(wName, att) {
    super(wName, att);
  }

  //Method Overriding
  showAtt(){
    this._att = this.getAtt();
    return super.showAtt() + "You attacked with " + this._wName + " and did " + this.att + " bludgeoning damage.\n";
  }
}

class Range extends Weapons{
  constructor(wName, att) {
    super(wName, att);
  }

  //Method Overriding
  showAtt(){
    this._att = this.getAtt();
    return super.showAtt() + "You shoot your " + this._wName + " and do " + this._att + " piercing damage.\n";
  }
}

class Spells extends Weapons{
  constructor(wName, att) {
    super(wName, att);
  }

  //Method Overriding
  showAtt(){
    this._att = this.getAtt();
    return super.showAtt() + "You cast " + this._wName + " and do " + this._att + " magic damage.\n";
  }
}
let w = new Player("Terra","Wizard",10,2,0);
let b = new Player("Burr","Barbarian",16,0,2);
let rg = new Player("Robin","Ranger",14,0,0);
rg.dmg = rg.rangeDamage();
console.log(w);
console.log(b);
console.log(rg);

let m = new Melee("Mace", 6);
console.log(m.showAtt());
console.log(m);

let r = new Range("Longbow", 8);
console.log(r.showAtt());
console.log(r);

let s = new Spells("Fireball", 10);
console.log(s.showAtt());
console.log(s);
/*
Melee Weapons
--------------
Club	4
Quarterstaff 6
Halberd 10
Longsword 8
Greatsword 12

Range Weapons
-------------
Light Crossbow 8
Heavy Crossbow 10
Hand Crossbow 6
Shortbow 6
Longbow 8

Magic Spells
------------
Fireball 10
Guiding Bolt 12
Frost Touch 8
Thorn Whip 6
Blood Burst 8 / Half added to hp
*/
