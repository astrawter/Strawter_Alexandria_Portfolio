using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Strawter_Alexandria_StringObjects
{
    class Program
    {
        static void Main(string[] args)
        {
            //Problem #1: Money Troubles
            Console.WriteLine("Problem #1: Money Troubles");

            Console.Write("Please enter an amount between $1 and $1000: ");
            string userAmt = Console.ReadLine();

            while (string.IsNullOrWhiteSpace(userAmt))
            {
                Console.WriteLine("Please make sure not to leave this blank!");
                userAmt = Console.ReadLine();
            }

            string valid = IsValid(userAmt);
            Console.WriteLine("The amount you entered of {0} is {1} for American currency.",userAmt,valid);

            /*
             Test 1: $5.25 valid
             Test 2: 27.00 invalid
             Test 3: $36799 invalid
             Test 4: $265.37 valid
             Test 5: $G3.75 invalid
             Test 6: twenty dollars invalid
             */
            Console.WriteLine("_____________________________________________________");

            //Problem #2: Redacted Files
            Console.WriteLine("\r\nProblem #2: Redacted Files");

            Console.WriteLine("Please enter a sentence below.");
            string userString = Console.ReadLine();

            while (string.IsNullOrWhiteSpace(userString))
            {
                Console.WriteLine("Please make sure not to leave this blank!");
                userString = Console.ReadLine();
            }

            string sentence = ToRedact(userString);

            Console.WriteLine("The original string of {0} redacted is {1}.", userString, sentence);

            /*
             Test 1: Strings ARE fun = Str-ngs -R- f-n
             Test 2: Can you read this? = C-n --- r--d th-s?
             Test 3: All Ava EATS are Apples = -ll -v- --TS -r- -ppl-s
             */
        }

        public static string IsValid(string amount)
        {
            string check = "valid";
            int dot = amount.IndexOf(".");
            decimal number;

            //Check for dollar sign
            if (amount.IndexOf("$") != 0)
            {
                check = "invalid";
                //Check for decimal point
            }else if(dot != amount.Length - 3){
                check = "invalid";
            }
            //Check if they are numbers
            else if (decimal.TryParse(amount.Substring(1), out number) == false)
            {
                check = "Invalid";
            }
            //check if the number is less than 1000
            else if (number > 1000)
            {
                check = "Invalid";
            }
            return check;
        }

        public static string ToRedact(string str)
        {
            string final;

            char[] charArray = str.ToCharArray();

            for(int i = 0; i < charArray.Length; i++)
            {
                if (char.ToLower(charArray[i]) == 'a')
                {
                    charArray[i] = '-';
                }else if(char.ToLower(charArray[i]) == 'e')
                {
                    charArray[i] = '-';
                }else if (char.ToLower(charArray[i]) == 'i')
                {
                    charArray[i] = '-';
                }else if (char.ToLower(charArray[i]) == 'o')
                {
                    charArray[i] = '-';
                }else if (char.ToLower(charArray[i]) == 'u')
                {
                    charArray[i] = '-';
                }else if (char.ToLower(charArray[i]) == 'y')
                {
                    charArray[i] = '-';
                }
            }
            final = String.Concat(charArray);
            return final;
        }
    }
}
