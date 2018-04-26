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
