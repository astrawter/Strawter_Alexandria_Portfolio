function convert(){
  var euros = document.getElementById('euro').value;
  var usd = exchange(euros);
  var conOut = "&euro;"+euros+" euros converted to dollars is $"+usd.toFixed(2);
  document.getElementById('output').innerHTML = conOut;
}

function weight(){
  var weight = document.getElementById("weight").value;
  var p = document.getElementById("planet");
  var userChoice = p.options[p.selectedIndex].value;
  var display;
  var nWeight;
  var planet;

  if (userChoice == 1)
  {
      nWeight = calcWeight(weight, 38);
      planet = "Mercury";
      display = "On Earth you weigh "+weight+" lbs, but on "+planet+" you would weigh "+nWeight+" lbs.";
  }else if(userChoice == 2)
  {
      nWeight = calcWeight(weight, 91);
      planet = "Venus";
      display = "On Earth you weigh "+weight+" lbs, but on "+planet+" you would weigh "+nWeight+" lbs.";
  }else if (userChoice == 3)
  {
      nWeight = calcWeight(weight, 100);
      planet = "Earth";
      display = "On Earth you weigh "+weight+" lbs, but on "+planet+" you would weigh "+nWeight+" lbs.";
  }else if (userChoice == 4)
  {
      nWeight = calcWeight(weight, 38);
      planet = "Mars";
      display = "On Earth you weigh "+weight+" lbs, but on "+planet+" you would weigh "+nWeight+" lbs.";
  }else if (userChoice == 5)
  {
      nWeight = calcWeight(weight, 234);
      planet = "Jupiter";
      display = "On Earth you weigh "+weight+" lbs, but on "+planet+" you would weigh "+nWeight+" lbs.";
  }else if (userChoice == 6)
  {
      nWeight = calcWeight(weight, 93);
      planet = "Saturn";
      display = "On Earth you weigh "+weight+" lbs, but on "+planet+" you would weigh "+nWeight+" lbs.";
  }else if (userChoice == 7)
  {
      nWeight = calcWeight(weight, 92);
      planet = "Uranus";
      display = "On Earth you weigh "+weight+" lbs, but on "+planet+" you would weigh "+nWeight+" lbs.";
  }else
  {
          nWeight = calcWeight(weight, 112);
          planet = "Neptune";
          display = "On Earth you weigh "+weight+" lbs, but on "+planet+" you would weigh "+nWeight+" lbs.";
  }
  document.getElementById("output2").innerHTML = display;
}

function addArr() {
  var display;
  var first = [ 4, 65, 32, 42, 12 ];
  var second = [ 1, 2, 5, 6, 9 ];

  var firstB = [ 54, 125, 96, 72, 45, 67 ];
  var secondB = [ 87, 122, 145, 65, 3, 800 ];

  var firstC = [ 10, 9, 8, 7 ];
  var secondC = [ 1, 2, 3, 4 ];

  var sub = newArr(first, second);
  for (var i = 0; i < sub.length; i++){
      display = first[i]+"-"+second[i]+" is "+sub[i]+"<br>";
      document.getElementById("output3").innerHTML += display;
  }
  document.getElementById("output3").innerHTML += "<br>";

  var subB = newArr(firstB, secondB);
  for (var i = 0; i < subB.length; i++){
      display = firstB[i]+"-"+secondB[i]+" is "+subB[i]+"<br>";
      document.getElementById("output3").innerHTML += display;
    }
    document.getElementById("output3").innerHTML += "<br>";

  var subC = newArr(firstC, secondC);
  for (var i = 0; i < subC.length; i++){
      display = firstC[i]+"-"+secondC[i]+" is "+subC[i]+"<br>";
      document.getElementById("output3").innerHTML += display;
    }
}


function exchange(euros){
  var usd = euros * 1.16;
  return usd;
}

function calcWeight(weight, percent){
  percent = percent/ 100;
  var newWeight = weight * percent;
  return newWeight;
}

function newArr(first, second) {
  var subArray = new Array(first.length);
     for (var i = 0; i < subArray.length; i++)
     {
         var difference = parseInt(first[i]) - parseInt(second[i]);
         subArray[i] = difference;
     }
     return subArray;
}
