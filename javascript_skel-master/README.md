# javascript_skel

After cloning run the following commands to get started:

`npm install`

`npm test -- --watch`

Your tests will auto run every time you save a files.



Im going to use this readme to write out my thoughts, ignore it if you don't care about it 

ok cool looks like gits working now, time to start the assignment, 

IntRoman :
method to convert integers to Roman Numerals

Input : integer
Output: string

------
So first round I hard coded the values of 1-4 , any larger values will just return hello for now. 
looking at how roman numerals are created, it seems that any numbers 0-3, and 5-8 can be written by just concatenating strings together one after the other.

But 4 and 9 need a minus, i.e. 5-1 = IV, and 10-1: IX
So they need some extra care. 

Ok so lets try to solve 1-10 now, 
So lets say i get passed in a value x, i want to find the largest possible roman numeral that exists in x, and then remove that value from x, and concatenate that numeral into a string to be returned. 

So I can go through an array of numerals/values, check if that value exists in x, if it does remove it and repeat, if not move on to the next smaller value.

-------
Ok so the code works for 1-3 and 5-10, but doesnt work for the 2 edge cases i mentioned before, i.e. 4 and 9, where i got IIII, and VIIII respectively. 
So according to how its meant to be read, 9 = 10 - 1, where 10 =X, and 1 =I, so 9 is equivalent to X - I, which becomes IX. 

-----
So lets say I pass in a 4 initially, like in my 4th test, my code will iterate through the array I have all the way down to 5, and it should never get a value equal or greater than 1 in the if statement, so it will pass through when I'm dividing it by 1. So lets say i divide 4/1, ill get 4, so if i get 4 i can just return IV.

Or get rid of the while loop, see what value i get when i divide, if its anything except 4 or 9 it carries on as normal, if it is a 4 or 9 it triggers the special case....


---- 
ok so lets think this through a bit more, lets take a large number like 2999, i divide it by a 1000, and get 2.999, so i want to remove 2 *1000 from the number, and conctanenate the values for 2000, which is MM, then move on to 999, it cant be divided by 1000, so go to 500. actually if i just go over the values 1,10, 100,1000, ill be able to check for the special edge cases. 

EEEEEEY it works for these cases so lets move on to bigger numbers.

--------

After passing in more random values, it seems like numbers that don't inclue 40, 400, 90, 900 work in the code, while the ones with 4/9 don't. This'll need some more test cases.
So ill also add 999, and 444 to see what happens?
ok ya they didint work
ohhh right i hard coded the values for 4 and 9 so now i have to make it depend on the loop

So the 4 = 5-1, while the 9 =10-1, so the 4 is i+1 -i, while 9 should be i+2 -i
-------
ok all the new tests pass now... im gonna commit and take a break work on my papers, see me back here at some point.
When i get back i need to do more comprehensive testing of the numbers and outputs, aswell as do input and output checks.

yalla bye.

---------------
woooooooooo im finally done with that, man that took way longer than i thought

ok so im gonna test a couple more inputs, probably 44, 99, 444, 999 for now, oh nvm 444 and 999 are already in there, guess ill just add 44 and 99 and review the edge cases after the sun rises. 

ok so looking  over the code again, i can probably use a hash map if i wanted to, but this solution is more fun,

-------------------------------------------
Im gonna switch over to the next part for now RomanInts

So same cases and logic here just backwards, im gonna pass in a string read it from either R->L or L->R check each symbol and get the value for that symbol

Base case will be any number not including 4 and 9 because those 2 will need 2 characters to be read while the rest only need the current value read in. because 9 =10-1, 4= 5-1, but 8 = 5+3 and so on. 
So lets start with the base cases. ill make a hash map to pull up the values for the symbols. 

ok so i have map now i loop through, check each individual value of the string and get it values from the map

ok it works for 1-5 not including 4, lets test up to 10... works not including 4 and 9 like it should

-------------------------------
ok so for 4 and 9, i can just hard code those values into my hash map, but thats kind of boring. 
Next option is update the for loop i have to add the 4 and 9 values to my hash map, but thats also kind of boring

4 = IV, 9=IX
40=XL, 90= XC
400 = CD, 900 = CM, 
so in each case we have a smaller number followed by a larger one. So i can check for that and thatll lmk if i have a 4 or 9 then i can just do the larger number - the smaller one, only issue with that is that if the string passed in is incorrect itll give me an incorrect value, so it has to be a tighter condition lets try as is.
ok cool it works for 1-10. Im gonna sleep  so for tommorow/today,test larger values,test for values that shouldnt be allowed,strings that are [art of the alphabet but not part of the language eg IC] i.e. not string, not caps, not in map,

-1---------------------



Method: RomanInts
Parameter: String
Output: Number

This is probably the basic structure I'll see if it needs updating later

--------------
40, 400,90,900 work so im going to try some error cases
IC is not a String in the language
20 is a number, so not string 
ix is lower case


-----------------------
Task List:
IntRoman : test non int inputs, test doubles, values smaller than 1, and negatives
            -clean up the code a bit

RomanInt: well do everything
            
-----------------------
Added some extra tests the code should be done.

-------------------------------------------------
Feedback : 
Code is too complex
Not tdd enough - not bothered to do anything about this now
but im just gonna write up the less complex(kinda boring) solutions i came up with before