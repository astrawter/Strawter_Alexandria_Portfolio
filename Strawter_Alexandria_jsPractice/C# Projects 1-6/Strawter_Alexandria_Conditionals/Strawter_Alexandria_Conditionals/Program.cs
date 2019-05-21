using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Strawter_Alexandria_Conditionals
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
             Alexandria Strawter
             Section 01
             02/07/2019
             Conditionals
             */

            //Problem #1: Hit the jackpot!

            //Prompt User for $$ of winnings 
            Console.WriteLine("Congratulations! Enter the amount of your winnings.");
            string userWinnings = Console.ReadLine();

            //Validate && convert string to decimal
            decimal winnings;
            while(!(Decimal.TryParse(userWinnings, out winnings)))
            {
                Console.WriteLine("Please make sure to enter a valid number amount for your winnings.");
                userWinnings = Console.ReadLine();

                Decimal.TryParse(userWinnings, out winnings);
            }

            //Prompt user for payment type
            Console.WriteLine("Would you like a lump sum (Enter \"L\") or annual payments (Enter \"A\") ?");
            string pType = Console.ReadLine().ToUpper();

            //Validate the user enters the correct payment type
            while(pType != "L" && pType != "A")
            {
                Console.WriteLine("Please enter either \"L\" for lum sum payments or \"A\" for annual payments!");
                pType = Console.ReadLine().ToUpper();
            }

            //Output actual total winnings for lump sum
            if(pType == "L")
            {
                //Use M to create literal and allow 85% to be multiplied against a decimal.
                decimal lump = winnings * .85M;

                //Use round to get the number to 2 places
                Console.WriteLine("Your winnings of $"+winnings+" as a one-time lump some payment is $"+Decimal.Round(lump,2));
            }

            //Output actual total winnings for annual
            if(pType == "A")
            {
                decimal annual = winnings / 20;
                Console.WriteLine("Your winnings of $"+winnings+" will be paid in 20 payments of $"+Decimal.Round(annual,2)+" a year.");
            }

            /*
             Test 1: 20000, "A" = $1,000
             Test 2: 100000.50, "L" = $85,000.425
             Test 3: 65000000.99, "a" = $$3,250,000.0495
             Test 4: 32000.30, "l" = $27200.255
             */

            //Problem #2: Lets make a deal
            Console.WriteLine("\r\n \r\nProblem #2: Lets make a deal");

            //Get the # of items in a bulk pack
            Console.WriteLine("How many items are in the bulk pack?");
            string sBulk =  Console.ReadLine();

            //Validate && convert string to int
            int qBulk;
            while (!(Int32.TryParse(sBulk, out qBulk)))
            {
                Console.WriteLine("Make sure to enter a valid number amount for items in the bulk pack.");
                sBulk = Console.ReadLine();

                Int32.TryParse(sBulk, out qBulk);
            }

            //Get cost of bulk pack
            Console.WriteLine("What is the cost of the bulk pack?");
            string sBulkCost = Console.ReadLine();

            //Validate && convert string to decimal
            decimal bulkCost;
            while (!(Decimal.TryParse(sBulkCost, out bulkCost)))
            {
                Console.WriteLine("Please make sure to enter a valid amount for the bulk cost.");
                sBulkCost = Console.ReadLine();

                Decimal.TryParse(sBulkCost, out bulkCost);
            }

            //Get cost of individual item
            Console.WriteLine("What is the cost of the individual item?");
            string sSoloCost = Console.ReadLine();

            //Validate && convert string to decimal
            decimal soloCost;
            while (!(Decimal.TryParse(sSoloCost, out soloCost)))
            {
                Console.WriteLine("Please make sure to enter a valid amount for the individual cost.");
                sSoloCost = Console.ReadLine();

                Decimal.TryParse(sSoloCost, out soloCost);
            }

            //Get coupon value
            Console.WriteLine("What is the amount of the coupon value?");
            string sCoupon = Console.ReadLine();

            //Validate && convert string to decimal
            decimal coupon;
            while (!(Decimal.TryParse(sCoupon, out coupon)))
            {
                Console.WriteLine("Make sure to enter a valid number amount for the coupon value.");
                sCoupon = Console.ReadLine();

                Decimal.TryParse(sCoupon, out coupon);
            }

            //Get price of one bulk item
            decimal oneBulk = Decimal.Round((bulkCost / qBulk),2);

            //Get price of the individual item minus the coupon value
            decimal soloCoupon = soloCost - coupon;

            if (oneBulk < soloCoupon)
            {
                Console.WriteLine("The cost of 1 item in the bulk pack is $"+oneBulk+", which is cheaper than the cost of the individual item with coupon, which is $"+soloCoupon+". Buy the bulk pack!");
            }
            else
            {
                Console.WriteLine("The cost of 1 item using a coupon is $"+soloCoupon+", which is cheaper than the cost of the individual item from the bulk pack, which is $"+oneBulk+". Buy the individual item and use the coupon!");
            }

            /*
             Test 1: 50, 100.00, 4.50, 1.00 = $2.00, $3.50, buy bulk
             Test 2: 20, 80.50, 6.25, 2.25 = $4.00, $4.025, buy individual
             Test 3: 30, 54.00, 3.20, 1.50 = $1.70, $1.80, buy individual
             */

            //Problem #3: Pumpkin Patch Pickers
            Console.WriteLine("\r\n \r\nProblem #3: Pumpkin Patch Pickers");

            //Get weigh of pumpkin
            Console.WriteLine("How much does your pumpkin weigh?");
            string sPumpkin =  Console.ReadLine();

            //Validate && convert string to double
            double pumpkin;
            while (!(Double.TryParse(sPumpkin, out pumpkin)))
            {
                Console.WriteLine("Make sure to enter a valid weight for the pumpkin.");
                sPumpkin = Console.ReadLine();

                Double.TryParse(sPumpkin, out pumpkin);
            }

            //Get the cost of the pumpkin
            decimal pumpkinCost= 0;

            if(pumpkin < 5.5){
                pumpkinCost = Decimal.Round(((decimal)pumpkin * 1.00M),2); 
                Console.WriteLine("Your pumpkin of "+ pumpkin +"lbs. costs $"+ pumpkinCost +".");
            }else if(pumpkin < 10.75){
                pumpkinCost = Decimal.Round(((decimal)pumpkin * .90M),2); 
                Console.WriteLine("Your pumpkin of "+ pumpkin +"lbs. costs $"+ pumpkinCost +".");
            }else if(pumpkin < 25){
                pumpkinCost = Decimal.Round(((decimal)pumpkin * .80M),2); 
                Console.WriteLine("Your pumpkin of "+ pumpkin +"lbs. costs $"+ pumpkinCost +".");
            }else if(pumpkin < 50){
                pumpkinCost = Decimal.Round(((decimal)pumpkin * .70M),2); 
                Console.WriteLine("Your pumpkin of "+ pumpkin +"lbs. costs $"+ pumpkinCost +".");
            }else if(pumpkin <= 100){
                pumpkinCost = Decimal.Round(((decimal)pumpkin * .60M),2); 
                Console.WriteLine("Your pumpkin of "+ pumpkin +"lbs. costs $"+ pumpkinCost +".");
            }else if(pumpkin > 100){
                pumpkinCost = Decimal.Round(((decimal)pumpkin * .50M),2); 
                Console.WriteLine("Your pumpkin of "+ pumpkin +"lbs. costs $"+ pumpkinCost +".");
            }

            /*
             Test 1: 4.5, $4.50
             Test 2: 10, $9.00
             Test 3: 20.75, $16.60
             Test 4: 40, $28.00
             Test 5: 100, $60.00
             Test 6: 150.30, $75.15
             Test 7: 3.4, $3.40
             */

            //Problem #4: Loyalty card
            Console.WriteLine("\r\n \r\nProblem #4: Loyalty card");

            //Get cost of the first item
            Console.WriteLine("What is the cost of your first item?");
            string sFirst = Console.ReadLine();

            //Validate && convert string to decimal
            decimal firstCost;
            while (!(Decimal.TryParse(sFirst, out firstCost)))
            {
                Console.WriteLine("Please make sure to enter a valid amount for the first item cost.");
                sSoloCost = Console.ReadLine();

                Decimal.TryParse(sFirst, out firstCost);
            }

            //Get the cost of the second item
            Console.WriteLine("What is the cost of your second item?");
            string sSecond = Console.ReadLine();

            //Validate && convert string to decimal
            decimal secondCost;
            while (!(Decimal.TryParse(sSecond, out secondCost)))
            {
                Console.WriteLine("Please make sure to enter a valid amount for the second item cost.");
                sSoloCost = Console.ReadLine();

                Decimal.TryParse(sSecond, out secondCost);
            }

            Console.WriteLine("Are you a preferred customer? (Yes or No)");
            string loyal = Console.ReadLine().ToUpper();

            //Validate the user enters either yes or no
            while(loyal != "YES" && loyal != "NO")
            {
                Console.WriteLine("Please enter either \"Yes\" or \"No\"!");
                loyal = Console.ReadLine().ToUpper();
            }

            decimal combined = firstCost + secondCost;
            //Output actual total winnings for lump sum
            if(loyal == "NO")
            {
                Console.WriteLine("Your total purchase is $"+combined+".");
            }

            //Output actual total winnings for annual
            if(loyal == "YES")
            {
                decimal discount = combined * .15M;
                combined = combined - discount;
                Console.WriteLine("Your total purchase is $"+Decimal.Round(combined,2)+", which includes your 15% discount.");
            }

            /*
             Test 1: $45.50, $75.00, yes = $102.42
             Test 2: $23.00, $44.25, no = $67.25
             Test 3: $35.75, $62.25, no = $98.00
             */
        }
    }
}
