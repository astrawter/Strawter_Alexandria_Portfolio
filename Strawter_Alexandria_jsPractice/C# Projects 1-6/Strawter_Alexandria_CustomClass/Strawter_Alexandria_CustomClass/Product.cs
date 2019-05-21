using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Strawter_Alexandria_CustomClass
{
    class Product
    {
        //3 Member Variables
        string mName;
        decimal mCostToMake;
        decimal mSellingPrice;

        //Constructor for products
        public Product(string _name, decimal _costToMake, decimal _sellingPrice)
        {
            mName = _name;
            mCostToMake = _costToMake;
            mSellingPrice = _sellingPrice;
        }

        //Create Getters for member variables
        public string GetName()
        {
            return mName;
        }

        public decimal GetCostToMake()
        {
            return mCostToMake;
        }

        public decimal GetSellingPrice()
        {
            return mSellingPrice;
        }

        //Create Setters for member variables
        public void SetName(string _name)
        {
            mName = _name;
        }

        public void SetCostToMake(decimal _costToMake)
        {
            mCostToMake = _costToMake;
        }

        public void SetSellingPrice(decimal _sellingPrice)
        {
            mSellingPrice = _sellingPrice;
        }

        //Custom method of the total profit
        public decimal ProfitMade(int quantity)
        {
            decimal profit = (mSellingPrice * quantity) - (mCostToMake * quantity);
            return profit;
        }
    }
}
