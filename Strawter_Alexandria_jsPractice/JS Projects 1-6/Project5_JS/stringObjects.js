
function start() {

var userAmt = document.getElementById("amount").value;

while (userAmt == "" || userAmt == null || userAmt == " ")
{
  userAmt = prompt("Please make sure to enter a value");
}
var valid = isValid(userAmt);
document.getElementById("output").innerHTML = "The amount you entered of "+userAmt+" is "+valid+" for American currency.";
}

function redact() {
  var userString = document.getElementById("string").value;

  while (userString == "" || userString == null || userString == " ")
  {
      userString = prompt("Please make sure not to leave this blank!");
  }

  document.getElementById("string").text = userString;

  var sentence = toRedact(userString);

  document.getElementById("output2").innerHTML = "The original string of "+userString+" redacted is "+sentence+".";
}

function isValid(amount) {
  var check = "valid";
  var dot = amount.indexOf(".");
  var number;
  var isNum = parseFloat(amount.substr(1));

  if (amount.indexOf("$") != 0)
  {
      check = "invalid";
      alert("no $");
  }else if(dot != amount.length - 3){
      check = "invalid";
      alert("no .");
  }else if (isNaN(isNum))
  {
      check = "Invalid";
  }
  else if (number > 1000)
  {
      check = "Invalid";
  }
  return check;
}

function toRedact(str) {
  var final;

  var charArray = str.split('');

  for(var i = 0; i < charArray.length; i++)
  {
      if (charArray[i].toLowerCase() == 'a')
      {
          charArray[i] = '-';
      }else if(charArray[i].toLowerCase() == 'e')
      {
          charArray[i] = '-';
      }else if (charArray[i].toLowerCase() == 'i')
      {
          charArray[i] = '-';
      }else if (charArray[i].toLowerCase() == 'o')
      {
          charArray[i] = '-';
      }else if (charArray[i].toLowerCase() == 'u')
      {
          charArray[i] = '-';
      }else if (charArray[i].toLowerCase() == 'y')
      {
          charArray[i] = '-';
      }
  }
  final = charArray.join("");
  return final;
}
