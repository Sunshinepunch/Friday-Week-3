Specs:
It will accept user inputted numbers and exclude other characters
It will return a range of numbers starting from 0 and ending at the user input
If the number contains a 1 it wil be replaced with "Beep!"
If the number contains a 2 it will be replaced with "Boop!", overiding the previous spec
Any number that contains a 3 will be replaced with "won't you be my neighbor?", overiding both previous specs
The user should be able to input a number and receive new results/the page should refresh results upon submission

Describe:roboRog()
Test:
Expect:


Describe: roboRog()
Test: It will return "not a number" if a number is not input
expect:roboRog(Happy) => Not a number

Describe: roboRog
Test: it will a string up to the number entered
Expect:roboRog(5) => "0,1,2,3,4,5"

Describe:roboRog()
Test: numbers that contain 3 will return as "Won't You be my neighbor?"
Expect: