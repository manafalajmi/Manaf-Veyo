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

