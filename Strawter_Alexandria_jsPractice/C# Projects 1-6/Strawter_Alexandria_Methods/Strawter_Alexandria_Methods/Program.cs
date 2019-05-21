using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Strawter_Alexandria_Methods
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
             Alexandria Strawter
             Section 01
             02/19/19
             Methods
             */

            //Problem #1: Currency Convertor
            Console.WriteLine("Problem #1: Currency Convertor");
            Console.Write("How many Euros would you like to convert to USD?: ");
            string euroString = Console.ReadLine();
            decimal euros;

            while(!(decimal.TryParse(euroString, out euros)))
            {
                Console.WriteLine("Please enter a valid amount for Euros to convert.");
                euroString = Console.ReadLine();
            }

            decimal usd = Exchange(euros);

            Console.WriteLine("{0} euros converted to dollars is ${1}", euros,Math.Round(usd,2));
            /*
             Test 1: 5.50 = $6.38
             Test 2: 15.32 = $17.77
             Test 3: 125.20 = $145.23
             */
            Console.WriteLine("____________________________________________________________");


            //Problem #2: Astronomical
            Console.WriteLine("\r\nProblem #2: Astronomical");
            Console.Write("What is your weight on Earth?: ");
            string weightString = Console.ReadLine();

            double weight;
            while (!(double.TryParse(weightString, out weight)))
            {
                Console.WriteLine("Please enter a valid weight.");
                weightString = Console.ReadLine();
            }

            Console.Write("1. Merucry\r\n2. Venus\r\n3. Earth\r\n4. Mars\r\n5. Jupiter\r\n6. Saturn\r\n7. Uranus\r\n8. Neptune\r\nPlanet Choice: ");
            string choiceString = Console.ReadLine();

            sbyte userChoice;
            //If the number is not in the range of 1-8 and is not a valid sbyte then resend validation

            while(!(sbyte.TryParse(choiceString, out userChoice)) || userChoice <= 0 || userChoice > 8)
                {
                    Console.WriteLine("Please choose a valid option 1-8!");
                    choiceString = Console.ReadLine();
                }
            double nWeight;
            string planet; 

            if (userChoice == 1)
            {
                nWeight = CalculateWeight(weight, 38);
                planet = "Mercury";
                Console.WriteLine("On Earth you weigh {0} lbs, but on {1} you would weigh {2} lbs.", weight, planet, nWeight);
            }else if(userChoice == 2)
            {
                nWeight = CalculateWeight(weight, 91);
                planet = "Venus";
                Console.WriteLine("On Earth you weigh {0} lbs, but on {1} you would weigh {2} lbs.", weight, planet, nWeight);
            }else if (userChoice == 3)
            {
                nWeight = CalculateWeight(weight, 100);
                planet = "Earth";
                Console.WriteLine("On Earth you weigh {0} lbs, and this is still {1} so you would weigh {2} lbs.", weight, planet, nWeight);
            }else if (userChoice == 4)
            {
                nWeight = CalculateWeight(weight, 38);
                planet = "Mars";
                Console.WriteLine("On Earth you weigh {0} lbs, but on {1} you would weigh {2} lbs.", weight, planet, nWeight);
            }else if (userChoice == 5)
            {
                nWeight = CalculateWeight(weight, 234);
                planet = "Jupiter";
                Console.WriteLine("On Earth you weigh {0} lbs, but on {1} you would weigh {2} lbs.", weight, planet, nWeight);
            }else if (userChoice == 6)
            {
                nWeight = CalculateWeight(weight, 93);
                planet = "Saturn";
                Console.WriteLine("On Earth you weigh {0} lbs, but on {1} you would weigh {2} lbs.", weight, planet, nWeight);
            }else if (userChoice == 7)
            {
                nWeight = CalculateWeight(weight, 92);
                planet = "Uranus";
                Console.WriteLine("On Earth you weigh {0} lbs, but on {1} you would weigh {2} lbs.", weight, planet, nWeight);
            }else
            {
                    nWeight = CalculateWeight(weight, 112);
                    planet = "Neptune";
                    Console.WriteLine("On Earth you weigh {0} lbs, but on {1} you would weigh {2} lbs.", weight, planet, nWeight);
            }

            /*
             Test 1: 160, 6 = 148.8lbs
             Test 2: 210, 9, 5 = 491.4lbs
             Test 3: 280, 3 = 280lbs
             */
            Console.WriteLine("____________________________________________________________");

            //Problem #3: Subtraction
            Console.WriteLine("\r\nProblem #3: Subtraction");

            int[] first = { 4, 65, 32, 42, 12 };
            int[] second = { 1, 2, 5, 6, 9 };

            //int[] first = { 54, 125, 96, 72, 45, 67 };
            //int[] second = { 87, 122, 145, 65, 3, 800 };

            //int[] first = { 10, 9, 8, 7 };
            //int[] second = { 1, 2, 3, 4 };

            int[] subtraction = NewArray(first, second);

            for (int i = 0; i < subtraction.Length; i++){
                Console.WriteLine("{0}-{1} is {2}", first[i], second[i], subtraction[i]);
            } 
            /*
             Test 1:
                4-1 is 3
                65-2 is 63
                32-5 is 27
                42-6 is 36
                12-9 is 3
             Test 2:
                54-87 is -33
                125-122 is 3
                96-145 is -49
                72-65 is 7
                45-3 is 42
                67-800 is -733
             Test 3:
                10-1 is 9
                9-2 is 7
                8-3 is 5
                7-4 is 3
             */
        }

        //Formula for problem 1 to convert from euro to usd
        public static decimal Exchange(decimal euros)
        {
            decimal amt = euros * 1.16M;
            return amt;
        }

        //Formula for problem 2 to calculate weight
        public static double CalculateWeight(double weight, double percent)
        {
            percent = percent/ 100;
            double newWeight = weight * percent;
            return newWeight;
        }

        //Formula for 3rd problem
        public static int[] NewArray(int[] first, int[] second)
        {
            int[] subArray = new int[first.Length];

            for (int i = 0; i < subArray.Length; i++)
            {
                int difference = first[i] - second[i];
                subArray[i] = difference;
            }
            return subArray;
        }
    }
}
