//Populate Weapon based on class select
var weps = {
    16: [["Club", 4],["Quarterstaff", 6],["Halberd", 10],["Longsword", 8],["Greatsword", 12]],
    14: [["Light Crossbow", 8],["Heavy Crossbow", 10],["Hand Crossbow", 6],["Shortbow", 6],["Longbow", 8]],
    10: [["Fireball", 10],["Guiding Bolt", 12],["Frost Touch", 8],["Thorn Whip", 6],["Blood Burst", 8]]
}

    function changeWeapon(value) {
        if (value.length == 0) document.getElementById("weapon").innerHTML = "<option></option>";
        else {
            var wepOptions = "";
            for (wepName in weps[value]) {
                wepOptions += "<option value = '"+ weps[value][wepName][1] +"'>" + weps[value][wepName][0] + "</option>";
            }
            document.getElementById("weapon").innerHTML = wepOptions;
        }
    }

//JS ECMA 6 Class Structure
/*CLASSES && SUBCLASSES*/
class Character{
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

  display(){
    return this._name + " the " + this._classes;
  }
}

//Class for enemies
class Enemy extends Character{
  constructor(name,classes,hp,mp,dmg) {
    super(name,classes,hp,mp,dmg)
  }
}

//Parent Class for weapons
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
  showAtt(char){
    this._att = this.getAtt();
    if (this._wName == "Blood Burst") {
      var heal = Math.floor(this._att / 2);
      char.hp += heal;
      return super.showAtt() + "You cast " + this._wName + " and do " + this._att + " magic damage.\nYou have healed for "+ heal + " points!\n";
    }
    return super.showAtt() + "You cast " + this._wName + " and do " + this._att + " magic damage.\n";
  }
}



let c = new Character();
let w;

function createChar() {

  c.name = document.getElementById('name').value;
  c.classes = document.getElementById('classes').options[document.getElementById('classes').selectedIndex].text;
  c.hp = document.getElementById('classes').value;
  if (c.hp == 10) {
    c.mp = 2;
  }else {
    c.mp = 0;
  }
  if (c.hp == 16) {
    c.dmg = 2;
  }else if (c.hp == 14) {
    c.dmg = c.rangeDamage();
  }else {
    c.dmg = 0;
  }

  return c;
}

function createWep() {
 var cN = document.getElementById('classes').value;
 var wep = document.getElementById('weapon');
 if (cN == 16) {
   w = new Melee();
 }else if(cN == 14){
   w = new Range();
 }else {
   w = new Spells();
 }

 w.wName = wep.options[wep.selectedIndex].text;
 w.att = wep.value;
 console.log(w);
}

function showChar() {
  document.getElementById("charInfo").innerHTML = c.display();
  document.getElementById("attackBtn").style.display = "block";
}

console.log(c);
// let w = new Character("Terra","Wizard",10,2,0);
// let m = new Melee("Mace", 6);
// console.log(m.showAtt());
// console.log(m);
//
// let r = new Range("Longbow", 8);
// console.log(r.showAtt());
// console.log(r);
//
// let s = new Spells("Blood Burst", 8);
// console.log(s.showAtt(w));
// console.log(s);


/*
Melee Weapons
--------------
["Club", 4]
["Quarterstaff", 6]
["Halberd", 10]
["Longsword", 8]
["Greatsword", 12]

Range Weapons
-------------
["Light Crossbow", 8]
["Heavy Crossbow", 10]
["Hand Crossbow", 6]
["Shortbow", 6]
["Longbow", 8]

Magic Spells
------------
["Fireball", 10]
["Guiding Bolt", 12]
["Frost Touch", 8]
["Thorn Whip", 6]
["Blood Burst", 8]
*/
