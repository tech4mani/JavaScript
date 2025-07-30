//1.simple function (no parameter)
function Myname(){
    console.log("hello every one");
}
Myname()

//2.function (with parameter)
function Myname(Subject){
    console.log("Today class is " + Subject);
}
Myname("Maths")

//3.function with return value
function Myname(Says,Name2){
    return Says+Name2;
}
let result = Myname("How are you ","Mani")
console.log(result)

//4.check even or odd
let a=7
function value(a){
    if (a%2==0){
        return "even";
    }
    else{
        return"odd";
    }
}
let values = value
console.log(values(a))

//5.Grade calculation using function and switch

let Subject="Maths";
let Mark=40
function value(Subject){
    switch(Subject.toLowerCase()){
    
    case "tamil":
        if (Mark>=90){
            console.log("Execelllent Mark");
        }
        else if (Mark>=40){
            console.log("Average Mark");
        }
        else {
            console.log("poor Mark");
        }
        break;

        case "english":
        if (Mark>=88){
            console.log("Execelllent Mark");
        }
        else if (Mark>=35){
            console.log("Average Mark");
        }
        else {
            console.log("poor Mark");
        }
        break;

        case "maths":
        if (Mark>=89){
            console.log("Execelllent Mark");
        }
        else if (Mark>=36){
            console.log("Average Mark");
        }
        else {
            console.log("poor Mark");
        }
        break;


        case "science":
        if (Mark>=87){
            console.log("Execelllent Mark");
        }
        else if (Mark>=36){
            console.log("Average Mark");
        }
        else {
            console.log("poor Mark");
        }
        break;

        case "social":
        if (Mark>=80){
            console.log("Execelllent Mark");
        }
        else if (Mark>=38){
            console.log("Average Mark");
        }
        else {
            console.log("poor Mark");
        }
        break;

    default:
        console.log("invalied")
}
}
value(Subject)

//6.factorial in function

function num(a,b){
    for (let i=1; i<=a; i++){
    b*=i;
}
return b
}
console.log(num(5,1));
