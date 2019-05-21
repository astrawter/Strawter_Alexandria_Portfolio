using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Strawter_Alexandria_CustomClass
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
             Alexandria Strawter
             Section 01
             02/23/2019
             Custom Class
             */

            //Instantiate 3 products
            Product Earrings = new Product("Earrings", 2M, 34M);
            Product Necklace = new Product("Necklace", 5M, 40M);
            Product Bracelet = new Product("Bracelet", 4.25M, 38.50M);

            //Display Menu for the user
            Console.WriteLine("Please choose an item to display more information on.");
            Console.WriteLine(" 1. Earrings\r\n 2. Necklace\r\n 3. Bracelet");
            string userChoice = Console.ReadLine();

            int choice;
            //Validate choice is a number from the menu
            while(!(int.TryParse(userChoice, out choice)) || choice <= 0 || choice > 3)
            {
                Console.WriteLine("Please choose a valid choice from the menu.");
                userChoice = Console.ReadLine();
            }

            //Display the information based on choice
            if(choice == 1)
            {
                Console.WriteLine("You chose {0} which cost {1} to make. They are sold for {2}.", Earrings.GetName(), Earrings.GetCostToMake().ToString("c"), Earrings.GetSellingPrice().ToString("c"));
                Console.WriteLine("The profit made selling one item will be {0}.", Earrings.ProfitMade(1).ToString("c"));
                Console.WriteLine("How many items would you like to sell?");
                string sQty = Console.ReadLine();
                int qty;
                while(!(int.TryParse(sQty, out qty)))
                {
                    Console.WriteLine("Please enter a valid number for quantity.");
                    sQty = Console.ReadLine();
                }
                Console.WriteLine("The profit made from selling {0} would be {1}", sQty, Earrings.ProfitMade(qty).ToString("c"));
            }else if(choice == 2)
            {
                Console.WriteLine("You chose {0} which cost {1} to make. They are sold for {2}.", Necklace.GetName(), Necklace.GetCostToMake().ToString("c"), Necklace.GetSellingPrice().ToString("c"));
                Console.WriteLine("The profit made selling one item will be {0}.", Necklace.ProfitMade(1).ToString("c"));
                string sQty = Console.ReadLine();
                int qty;
                while (!(int.TryParse(sQty, out qty)))
                {
                    Console.WriteLine("Please enter a valid number for quantity.");
                    sQty = Console.ReadLine();
                }
                Console.WriteLine("The profit made from selling {0} would be {1}", sQty, Necklace.ProfitMade(qty).ToString("c"));
            }
            else
            {
                Console.WriteLine("You chose {0} which cost {1} to make. They are sold for {2}.", Bracelet.GetName(), Bracelet.GetCostToMake().ToString("c"), Bracelet.GetSellingPrice().ToString("c"));
                Console.WriteLine("The profit made selling one item will be {0}.", Bracelet.ProfitMade(1).ToString("c"));
                string sQty = Console.ReadLine();
                int qty;
                while (!(int.TryParse(sQty, out qty)))
                {
                    Console.WriteLine("Please enter a valid number for quantity.");
                    sQty = Console.ReadLine();
                }
                Console.WriteLine("The profit made from selling {0} would be {1}", sQty, Bracelet.ProfitMade(qty).ToString("c"));
            }
            

        }
    }
}
