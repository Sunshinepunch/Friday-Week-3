#_{Friday Project Number 3 - Porfolio}

#### _{This project combines beginner level CSS/HTML and Javascript with jQuery for Epicodus week 3 through the use of looping}_

#### By _{Becket Harvey}_

## _Github Link_ https://github.com/Sunshinepunch/Friday-Week-3

## Technologies Used

* _HTML_
* _CSS_
* _VSCode_
* _Javascript_
* _jQuery_
* _Git Bash_
* _Bootstrap_
*_The hopes and dreams of a young boy tempered by a harsh reality_

## Description
* _This project is a website that returns a text count up to a number input by the user. It replaces any digit that includes a 1, 2, or 3 with "Beep", "Boop", or "Won't you be my neighbor" respectively. It also returns a statement whenever anything that is not a number is submitted.

## Setup/Installation Requirements
* A browser is all that is required. Simply run the index.html file and answer the questions! Note* There is no accessibility added for sight impaired users, but functionality will be updated once I learn how!

## Known Bugs
* _None I can find, but if you do be sure to hit me up and let me know!_

## License
_{MIT}_ This is open source for anyone to use and I am not responsible for any problems resulting from its use or implementation

## Contact Information
* Find me on Github under SunshinePunch!



Specs:
It will accept user inputted numbers and exclude other characters

It will return a range of numbers starting from 0 and ending at the user input

If the number contains a 1 it wil be replaced with "Beep!"

If the number contains a 2 it will be replaced with "Boop!", overiding the previous spec

Any number that contains a 3 will be replaced with "won't you be my neighbor?", overiding both  previous specs

The user should be able to input a number and receive new results/the page should refresh results upon submission

Describe:roboRog()
Test:
Expect:


Describe: roboRog()
Test: It will return "not a number" if a number is not input
expect:roboRog(Happy) => Not a number

Describe: roboRog
Test: it will return a string up to the number entered
Expect:roboRog(5) => 0,1,2,3,4,5

Describe:roboRog()
Test: numbers that contain 3 will return as "Won't You be my neighbor?"
Expect:roboRog(13) => 0,1,2,"Won't you be my neighbor?",4,5,6,7,8,9,10,11,12,"Won't you be my neighbor?"

Describe: roboRog()
test: numbers that contain 2 will return as "Boop!"
expect: roboRog(2) => 0,1,"Boop!"


Describe:roboRog()
Test: numbers that contain 1 will return as "Beep!"
Expect: roboRog(1) => 0, "Beep!"

Describe:roboRog()
Test: empty spaces will return as NaN
Expect:roboRog("") => Not a number

Describe:roboRog()
Test:anything not a number will return as NaN
Expect:roboRog( ) => Not a number