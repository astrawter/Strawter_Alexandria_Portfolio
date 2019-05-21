function getWinnings() {
  var display;
  var total;
  var uWin = document.getElementById("totalWin").value;
  var lottoInput = document.getElementById("payment");
  var uPay = payment.options[payment.selectedIndex].value;

  if (uPay == "A") {
    total = uWin/20;
    display = "Your winnings of $"+uWin+" will be paid in 20 payments of $"+total+" a year."
  }else {
    total = uWin * .85;
    display = "Your winnings of $"+uWin+" as a one-time lump sum payment is $"+total+".";
  }
  document.getElementById("winDisp").innerHTML = display;
}

function getCheaper(){
  var bulkNum = document.getElementById("bulkNum").value;
  var bulkCost = document.getElementById("bulkCost").value;
  var indCost = document.getElementById("indCost").value;
  var coupon = document.getElementById("coupon").value;
  var display;

  var perBulk = bulkCost/bulkNum;

  var wCoup = indCost - coupon;

  if (perBulk < wCoup) {
    display = "The cost of 1 item in the bulk pack is $"+perBulk+", which is cheaper than the cost of the individual item with coupon, which is $"+wCoup+". Buy the bulk pack!"
  }else {
    display = "The cost of 1 item using a coupon is $"+wCoup+", which is cheaper than the cost of the individual item from the bulk pack, which is $"+perBulk+". Buy the individual item and use the coupon";
  }

  document.getElementById("cheapDisp").innerHTML = display;
}

function getPrice() {
  var display;
  var pumpWeight = document.getElementById("pumpWeight").value;
  var pumpkinCost;
  if(pumpWeight< 5.5){
      pumpkinCost = pumpWeight* 1.00
      display = "Your pumpkin of "+ pumpWeight+"lbs. costs $"+ pumpkinCost +".";
  }else if(pumpWeight< 10.75){
      pumpkinCost = pumpWeight* .90;
      display = "Your pumpkin of "+ pumpWeight+"lbs. costs $"+ pumpkinCost +".";
  }else if(pumpWeight< 25){
      pumpkinCost = pumpWeight* .80;
      display = "Your pumpkin of "+ pumpWeight+"lbs. costs $"+ pumpkinCost +".";
  }else if(pumpWeight< 50){
      pumpkinCost = pumpWeight* .70;
      display = "Your pumpkin of "+ pumpWeight+"lbs. costs $"+ pumpkinCost +".";
  }else if(pumpWeight<= 100){
      pumpkinCost = pumpWeight* .60;
      display = "Your pumpkin of "+ pumpWeight+"lbs. costs $"+ pumpkinCost +".";
  }else if(pumpWeight> 100){
      pumpkinCost = pumpWeight* .50;
      display = "Your pumpkin of "+ pumpWeight+"lbs. costs $"+ pumpkinCost +".";
  }
    document.getElementById("priceDisp").innerHTML = display;
}


function isMember() {
  var fPrice = parseFloat(document.getElementById("fPrice").value);
  var sPrice = parseFloat(document.getElementById("sPrice").value);
  var mem = document.getElementById("member").checked;
  var total = 0;
  var display;
  var combined = fPrice + sPrice;

  if (mem) {
    var discount = combined * .15;
    total = combined - discount;
    display = "Your total purchase is $"+total+", which includes your 15% discount.";
  }else {
    total = combined;
    display = "Your total purchase is $"+total+".";
  }
  document.getElementById("totalDisp").innerHTML = display;
}
