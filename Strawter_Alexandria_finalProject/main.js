//Populate Weapon based on class select
var weps = {
    16: [["Club", 4],["Mace", 4],["Halberd", 8],["Longsword", 8],["Greatsword", 6]],
    14: [["Light Crossbow", 8],["Heavy Crossbow", 8],["Hand Crossbow", 6],["Shortbow", 6],["Longbow", 8]],
    10: [["Guiding Bolt", 6],["Frost Touch", 8],["Thorn Whip", 6], ["Quarterstaff", 6]]
}

var enemies = {
  1: ["Cockatrice", 13, 4, 1],
  2: ["Werewolf", 15, 8, 2],
  3: ["Manticore", 18, 8, 3]
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
  constructor(name,classes,hp) {
    this._name = name;
    this._classes = classes;
    this._hp = hp;
  }

  get name() {return this._name;}
  set name(value) {this._name = value;}

  get classes() {return this._classes;}
  set classes(value) {this._classes = value;}

  get hp() {return this._hp;}
  set hp(value) {this._hp = value;}


  rangeDamage(){
    var rgD = Math.floor(Math.random() * 4) + 1;
    return rgD;
  }

  display(){
    return this._name + " the " + this._classes;
  }

  toString(){
    var arr = this._name + " "+this._classes+ " "+this._hp;
    console.log(arr);
    return arr;
  }
}

//Class for enemies
class Enemy{
  constructor(name,hp,att,mod) {
    this._name = name;
    this._hp = hp;
    this._att = att;
    this._mod = mod;
  }

  get name() {return this._name;}
  set name(value) {this._name = value;}

  get hp() {return this._hp;}
  set hp(value) {this._hp = value;}

  get att() {return this._att;}
  set att(value) {this._att = value;}

  get mod() {return this._mod;}
  set mod(value) {this._mod = value;}

  bossAtt(){
    var damage = (Math.floor(Math.random() * this._att) + 1) + this._mod;
    return damage;
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
}

let c = new Character();
let w;

function createChar() {
  c.name = document.getElementById("name").value;
  c.classes = document.getElementById("classes").options[document.getElementById('classes').selectedIndex].text;
  c.hp = document.getElementById("classes").value;
  saveChar();
  document.getElementById("name").value= " ";
  document.getElementById("classes").options.selectedIndex = 0;
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
 return w;
}

function makeAtt(){
  var text;
  if (boss.hp == 0) {
    alert("Choose a new Enemy");
  }else {
    let weapon = createWep();
    var sub = weapon.getAtt();
    boss.hp -= sub;
    var damage = boss.bossAtt();
    c.hp -= damage;
    text = "Make your next attack."
    if (c.hp < 1) {
      c.hp = 0;
      text = "The "+boss.name+ " has killed you!";
      document.getElementById("wepChoice").style.display = "none";
    }
    else if (boss.hp < 1) {
      boss.hp = 0;
      text = "You have defeated the "+boss.name;
      document.getElementById("wepChoice").style.display = "none";
    }
    alert("Your health: " + c.hp+ "\nEnemy health: "+ boss.hp);
    alert(text);
  }
}

function showChar() {
  document.getElementById("charInfo").innerHTML = c.display();
}

function startFight() {
    document.getElementById("wepChoice").style.display = "block";
    document.getElementById("btn").style.display = "none";
}

let boss = new Enemy();
function spawnEnemy(value) {
  boss.name = enemies[value][0];
  boss.hp = enemies[value][1];
  boss.att = enemies[value][2];
  boss.mod = enemies[value][3];
  return boss;
}


function showEnemy(value) {
  var out = document.getElementById("enemyBlock");
  if (value == 1) {
    out.innerHTML = '<img src="img/Cockatrice.jpg" id="1" alt="Cockatrice">';
  }else if (value == 2 ) {
    out.innerHTML = '<img src="img/Werewolf.jpg" id="3" alt="Werewolf">';
  }else {
    out.innerHTML = '<img src="img/Manticore.jpg" id="2" alt="Manticore">';
  }
  document.getElementById("btn").style.display = "block";
}

//Local Storage
function saveChar() {
  window.localStorage.setItem('char', JSON.stringify(c.toString()));//JSON.stringify(c)
}

function loadChar(){
JSON.parse(window.localStorage.getItem('char'));
var info = JSON.parse(localStorage['char']).split(" ");
console.log(info);

document.getElementById('name').value = info[0];
document.getElementById('classes').value = info[2];
changeWeapon(info[2]);
c.hp = info[2];
}
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
