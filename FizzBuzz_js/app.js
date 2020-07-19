
//FizzBuzz project in javascript by https://github.com/manisalehi
//--------------------------------------------------------------------------------
// Question : print out all of the numbers from 1 to 100 and
// for any number that is a 3 multiplied we should pring Fizz 
// next to the number and for any number which is a multipied of 5 we should say Buzz
// and for any number that is a multipllied of both 3 and 5 we should say 
//---------------------------------------------------------------------------------
// finnd the written version of the seloutin at the bottom of the file + and the consept that you'll learn from 
// consept that you'll learn from 
//---------------------------------------------------------------------------------
// code : 

 //Function to print out Fizz
 const Fizz=(input)=>{
    document.writeln(`${input} Fizz ` + "<br>");
}
//function to print Buzz
const Buzz =(input)=>{
    document.writeln(`${input} Buzz` + "<br>");
}
//function to print FizzBuzz
const FizzBuzz =(input)=>{
    document.writeln(`${input} FizzBuzz` + "<br>");
}
//function for the otherr numbers
const none =(input)=>{
    document.writeln(input + "<br>");
}

//Starting point
// A loop so we can print out all the numbers 
for (var i = 1; i <=100 ; i++){ check(i); } // clling the fucntion check 

// to check if the number could be multiplied by 3 or 5 or both
 function check(num){ 
     if( num%3 && num%5 !=0){// only by 3
        Fizz(num);//calling fizz
     }else if(num%3 !=0 && num%5 ==0){//only by 5
        Buzz(num); //calling buzz
    }else if (num%3==0 && num%5==0){
        FizzBuzz(num); // callinng fizz buzz
    }else{
        none(num); // calling none
    }
 }

 //this project is a biggner level project so i tried to use a varity of different syntaxes 
 // so the biggners can take a look at this project and see the the basic syntaxes 

//sloution : 
//first we'll loop one hundred times and for each one we are going to call the function check 
// In the function check we will categorize the number under any of the 4 categories
// first those that could are fizz
// second those that are buzz
// third those that are fizz buzz
// fourth those that are in none of them
// and than depends on it category the relaeted function will be runned 

//concepts : 
// for loops
// functions
// arrow function (ES6)
//if statement
//string template
//string concatition

