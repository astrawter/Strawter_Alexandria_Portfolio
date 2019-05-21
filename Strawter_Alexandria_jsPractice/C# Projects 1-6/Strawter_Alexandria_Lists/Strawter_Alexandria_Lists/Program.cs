using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Strawter_Alexandria_Lists
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
             Alexandria Strawter
             Section 01
             02/21/2019
             Lists
             */
            //Initiate items in the price list
            //List<decimal> priceList = new List<decimal>() { 1.25M, 2.56M, 5.67M, 4M, 8.25M, 2.99M, 9.99M };
            List<decimal> priceList = new List<decimal>() { 5.75M, 6.79M, 0.65M, 3.12M, 7.40M, 6.81M, 10M };

            Console.WriteLine("We will be displaying the sum of all items inside of a premade price list.");
            string total = AddUpCosts(priceList);

            Console.WriteLine(total);
            
            Console.WriteLine("\r\nNow we will be making some changes to list and giving you the updated total.");

            //Remove two items
            priceList.RemoveAt(2);
            priceList.RemoveAt(5);

            //Insert a number at the beggining of the list
            //decimal newPrice = 6.78M;
            decimal newPrice = 5.99M;
            priceList.Insert(0,newPrice);

            //Print new results to the console
            string newTotal = AddUpCosts(priceList);

            Console.WriteLine(newTotal);
        }   

        static string AddUpCosts(List<decimal> prices)
        {
            decimal sum = 0;
            for(int i = 0; i < prices.Count; i++)
            {
                sum += prices[i];
            }

            string output = "The sum of the prices in the list is $" + Math.Round(sum,2);
            return output;
        }
    }
}
