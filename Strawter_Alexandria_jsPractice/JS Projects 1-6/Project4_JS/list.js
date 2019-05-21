var info = document.getElementById("info");
var priceList = [5.75, 6.79, 0.65, 3.12, 7.40, 6.81, 10];

var total = addUpCosts(priceList);
info.innerHTML += total;

info.innerHTML += "<br><br>Now we will be making some changes to list and giving you the updated total.<br>";

//Remove two items
priceList.splice(2,1);
priceList.splice(5,1);

//Insert a number at the beggining of the list
//decimal newPrice = 6.78M;
var newPrice = 5.99;
priceList.unshift(newPrice);

//Print new results to the console
var newTotal = addUpCosts(priceList);

info.innerHTML += newTotal;

function addUpCosts(prices) {
  var sum = 0;
  for(var i = 0; i < prices.length; i++)
  {
      sum += prices[i];
  }

  var output = "The sum of the prices in the list is $" + sum.toFixed(2);
  return output;
}
