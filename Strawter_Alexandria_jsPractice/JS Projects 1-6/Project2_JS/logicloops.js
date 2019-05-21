function getGrades() {
  var grade1 = document.getElementById('grade1').value;
  var grade2 = document.getElementById('grade2').value;
  var grades = [grade1, grade2];
  var display;
    if (grades[0] > 70 && grades[1]> 70) {
         display = "Congrats, both grades are passing!";
     } else {
         display = "One or more grades are failing, try harder next time!";
     }
     document.getElementById('gradeDisp').innerHTML = display;
  }

function getBrunch(){
  var age = document.getElementById('age').value;
  var display;
  if (age >= 55 || age < 10)
    {
        display = "Your cost for brunch today is $10.";
    }else{
        display = "Your cost for brunch today is $15.";
    }
  document.getElementById('brunchDisp').innerHTML = display;
}

function getCollection() {
  var display;
  var dvd = parseInt(document.getElementById('dvdNum').value);
  var blu = parseInt(document.getElementById('bluNum').value);
  var uv = parseInt(document.getElementById('uvNum').value);
  var coll = [dvd, blu, uv];
  var movieTotal = 0;

  for(var i = 0; i < coll.length; i++)
   {
       movieTotal += coll[i];
   }

   display = "Wow, I am impressed with your collection of "+ movieTotal +" movies!";
  document.getElementById('movieDisp').innerHTML = display;
}

function getBalance() {
   var gift = document.getElementById('giftStart').value;
   document.getElementById('giftDisp').innerHTML = " ";
   var purchase = 0;
   while (gift > 0)
   {
       var purchase = prompt("How much is your purchase?: ");
       while (isNaN(purchase)) {
         purchase = prompt("Remaining Balance: $"+gift+"\nPlease enter a valid purchase amount: ");
       }
       gift -= purchase;
       var show = "With your current purchase of $"+purchase+", you can still spend $"+Math.abs(gift);
       alert("Remaining Balance: $"+gift);

       document.getElementById('giftDisp').innerHTML += show + "<br>";
   }

   document.getElementById('giftDisp').innerHTML +="With your last purchase of $"+purchase+", you have used your gift card up and still owe $"+Math.abs(gift)+".";

}
