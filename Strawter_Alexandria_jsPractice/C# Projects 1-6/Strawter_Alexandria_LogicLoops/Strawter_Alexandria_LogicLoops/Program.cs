using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Strawter_Alexandria_LogicLoops
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
             Alexandria Strawter
             Section 01
             02/11/2019
             Logic & Loops
             */

            //Problem #1 – Logical Operators: Making The Grade
            Console.WriteLine("Problem #1 – Logical Operators: Making The Grade\r\n");

            int[] grades = new int[2];

            Console.Write("Enter the first grade you recieved: ");
            string sFirstGrade = Console.ReadLine();

            int firstGrade;
            while (!(Int32.TryParse(sFirstGrade, out firstGrade)))
            {
                Console.WriteLine("Please enter a valid grade number!");
                sFirstGrade = Console.ReadLine();

                Int32.TryParse(sFirstGrade, out firstGrade);
            }

            grades[0] = firstGrade;

            Console.Write("Enter the second grade you recieved: ");
            string sSecondGrade = Console.ReadLine();

            int secondGrade;
            while (!(Int32.TryParse(sSecondGrade, out secondGrade)))
            {
                Console.WriteLine("Please enter a valid grade number!");
                sSecondGrade = Console.ReadLine();

                Int32.TryParse(sSecondGrade, out secondGrade);
            }

            grades[1] = secondGrade;

            if (grades[0] > 70 && grades[1] > 70) {
                Console.WriteLine("Congrats, both grades are passing!");
            } else if (grades[0] < 70 || grades[1] < 70)
            {
                Console.WriteLine("One or more grades are failing, try harder next time!");
            }

            /*
             Test 1: 95, 85, Congrats...
             Test 2: 82, 68, Try harder...
             Test 3: Eighty, 80, 91, Congrats...
             Test 4: 69, 72, Try harder...
             */
            Console.WriteLine("______________________________________________________");

            //Problem #2 – Logical Operators: Brunch Bunch
            Console.WriteLine("\r\nProblem #2 – Logical Operators: Brunch Bunch\r\n");

            Console.Write("Please enter your age to find out the cost of brunch: ");
            string sAge = Console.ReadLine();

            int age;
            while (!(Int32.TryParse(sAge, out age)))
            {
                Console.WriteLine("Please enter a valid age!");
                sAge = Console.ReadLine();

                Int32.TryParse(sAge, out age);
            }

            if (age >= 55 || age < 10)
            {
                Console.WriteLine("Your cost for brunch today is $10.");
            }else{
                Console.WriteLine("Your cost for brunch today is $15.");
            }

            /*
             Test 1: 57 = $10
             Test 2: 39 = $15
             Test 3: 8 = $10
             Test 4: 10 = $15
             Test 5: 25 = $15
             */
            Console.WriteLine("______________________________________________________");

            //Problem #3 – For Loop: Add Them Up
            Console.WriteLine("\r\nProblem #3 – For Loop: Add Them Up\r\n");

            int[] movies = new int[3];
            int movieTotal = 0;

            Console.Write("How many DVDs do you own?: ");
            string sDvd = Console.ReadLine();

            int dvd;
            while (!(Int32.TryParse(sDvd, out dvd)))
            {
                Console.WriteLine("Please enter a valid number of DVDs!");
                sDvd = Console.ReadLine();

                Int32.TryParse(sDvd, out dvd);
            }
            movies[0] = dvd;

            Console.Write("How many Blu-Rays do you own?: ");
            string sBlu = Console.ReadLine();

            int blu;
            while(!(Int32.TryParse(sBlu, out blu)))
            {
                Console.WriteLine("Please enter a valid number of Blu-Rays!");
                sBlu = Console.ReadLine();

                Int32.TryParse(sBlu, out blu);
            }
            movies[1] = blu;

            Console.Write("How many Digital Ultraviolet copies do you own?: ");
            string sUv = Console.ReadLine();

            int uv;
            while(!(Int32.TryParse(sUv, out uv)))
            {
                Console.WriteLine("Please enter a valid number of Ultraviolet copies!");
                sUv = Console.ReadLine();

                Int32.TryParse(sUv, out uv);
            }
            movies[2] = uv;

            for(int i = 0; i < movies.Length; i++)
            {
                movieTotal += movies[i];
            }

            Console.WriteLine("Wow, I am impressed with your collection of "+ movieTotal +" movies!");

            /*
             Test 1: 45, 15, 2 = 62
             Test 2: 60, 75, 45 = 180
             Test 3: 4, 4, 4 = 12
             */
            Console.WriteLine("______________________________________________________");

            //Problem #4 – While Loop: Cha-Ching!
            Console.WriteLine("\r\nProblem #4 – While Loop: Cha-Ching!\r\n");

            Console.Write("What is the current balance of the gift card?: ");
            string sGift = Console.ReadLine();

            decimal gift;
            while(!(Decimal.TryParse(sGift, out gift)))
            {
                Console.WriteLine("Please enter a valid amount for the gift card.");
                sGift = Console.ReadLine();

                Decimal.TryParse(sGift, out gift);
            }

            decimal purchase = 0;
            while (gift > 0)
            {
                Console.Write("How much is your purchase?: ");
                string sPurchase = Console.ReadLine();

                while(!(Decimal.TryParse(sPurchase, out purchase)))
                {
                    Console.WriteLine("Please enter a valid purchase amount.");
                    sPurchase = Console.ReadLine();

                    Decimal.TryParse(sPurchase, out purchase);
                }

                gift -= purchase;
                Console.WriteLine("With your current purchase of $"+purchase+", you can still spend $"+gift);
            }

            Console.WriteLine("With your last purchase of $"+purchase+", you have used your gift card up and still owe $"+Math.Abs(gift)+".");

            /*
             Test 1: $30
                1a. 5 = 25
                1b. 10.50 = 14.50
                1c. 16 = 1.50
             Test 2: $50
                2a. 10 = 40
                2b. 5 = 35
                2c. 10 = 25
                2d. 25 = 0
             */
        }
    }
}
