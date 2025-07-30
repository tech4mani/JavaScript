//license

let age=18
if (age>=18){
    console.log("elidible.")
}
else{
    console.log("not eligible.")
}

//2
    let age = Number(prompt("Enter your age"));
    if (age >= 18) {
      console.log("You are eligible to vote.");
    } else {
      console.log("You are not eligible to vote.");
    }

//3
    let a;
    a=prompt("enter your age");
    if (a>18){
        console.log("You are an adult.");
    }
    else if (a>=15){
        console.log("You are an teenage.");
    }
    else {
        console.log("You are an child.");
    }

//4
let a;
a=prompt("Enter the value")
if (a > 0)
    {
        console.log("this is a positive number")
    }
    else if (a < 0){
        console.log("this is negative number")
    }
    else{
        console.log("ths is 0")
}

//5
let number;
number=prompt("Enter the value");

    if (number%2==0){
        console.log("the number is even")
    }
    else if (number%2!=0){
        console.log("the number is odd")
    }
    else {
        console.log("invalied number")
    }