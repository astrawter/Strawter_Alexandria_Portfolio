function custClass() {

  class Product{
    constructor(mName, mCostToMake, mSellingPrice){
      this._name = mName;
      this._costToMake = mCostToMake;
      this._sellingPrice = mSellingPrice;
    }

    get mName(){
      return this._name;
    }
    set mName(newName){
      this._name = newName
    }

    get mCostToMake(){
      return this._costToMake;
    }
    set mCostToMake(newCost){
      this._costToMake = parseFloat(newCost);
    }

    get mSellingPrice(){
      return this._sellingPrice;
    }
    set mSellingPrice(newPrice){
      this._sellingPrice = parseFloat(newPrice);
    }

    profitMade(quantity){
      var profit = (this.mSellingPrice * quantity) - (this.mCostToMake * quantity);
      return profit;
    }
  }

  var earrings = new Product("Earrings", 2, 34);
  var necklace = new Product("Necklace", 5, 40);
  var bracelet = new Product("Bracelet", 4.25, 38.50);

  var choice = document.getElementById('uChoice').value;
  var out = document.getElementById("output");

  if(choice == 1)
  {
    output.innerHTML = "You chose "+earrings.mName+" which cost $"+earrings.mCostToMake.toFixed(2)+" to make. They are sold for $"+earrings.mSellingPrice.toFixed(2)+".<br>";
    output.innerHTML +="The profit made selling one item will be $"+earrings.profitMade(1).toFixed(2)+".";
    var qty = prompt("How many items would you like to sell?");
    while(isNaN(qty))
    {
        qty = prompt("Please enter a valid number for quantity.");
    }
    output.innerHTML += "<br>The profit made from selling "+qty+" would be $"+earrings.profitMade(qty).toFixed(2);
   }
  else if(choice == 2)
  {
      output.innerHTML ="You chose "+necklace.mName+" which cost $"+necklace.mCostToMake.toFixed(2)+" to make. They are sold for $"+necklace.mSellingPrice.toFixed(2)+".<br>";
      output.innerHTML +="The profit made selling one item will be $"+necklace.profitMade(1).toFixed(2)+".";
      var qty = prompt("How many items would you like to sell?");
      while (isNaN(qty))
      {
          qty = prompt("Please enter a valid number for quantity.");
      }
      output.innerHTML +="<br>The profit made from selling "+qty+" would be $"+necklace.profitMade(qty).toFixed(2);
  }
  else
  {
      output.innerHTML ="You chose "+bracelet.mName+" which cost "+bracelet.mCostToMake.toFixed(2)+" to make. They are sold for $"+bracelet.mSellingPrice.toFixed(2)+".<br>";
      output.innerHTML += "The profit made selling one item will be $"+bracelet.profitMade(1).toFixed(2)+".";
      var qty = prompt("How many items would you like to sell?");
      while (isNaN(qty))
      {
          qty = prompt("Please enter a valid number for quantity.");
      }
      output.innerHTML += "<br>The profit made from selling "+qty+" would be $"+bracelet.profitMade(qty).toFixed(2);
  }
}
