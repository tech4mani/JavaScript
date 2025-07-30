// Hotel

let Dish_name="mutton_briyani";
switch(Dish_name){
    case "chicken_briyani":
        console.log('$200')
        break
    case "mutton_briyani":
        console.log('$300')
        break
    case "mutton_sukka":
        console.log('$250')
        break
    case "chicken_sukka":
        console.log('$200')
        break
    default:
        console.log("not_available today")
}

// switch case task1
let D="+";
let a=10;
let b=20;
switch(D){
    case "+":
        console.log(a+b)
        break
    case "-":
        console.log(a-b)
        break
    case "*":
        console.log(a*b)
        break
    case "%":
        console.log(a%b)
        break
    default:
        console.log("invalied")
}

//task2

let Subject="Maths";
let Mark=90
switch(Subject.toLowerCase()){
    
    case "tamil":
        if (Mark>=90){
            console.log("Mark Execelllent");
        }
        else if (Mark>=40){
            console.log("Mark Average");
        }
        else {
            console.log("Mark poor");
        }
        break;

        case "english":
        if (Mark>=88){
            console.log("Mark Execelllent");
        }
        else if (Mark>=35){
            console.log("Mark Average");
        }
        else {
            console.log("Mark poor");
        }
        break;

        case "maths":
        if (Mark>=89){
            console.log(":Mark Execelllent");
        }
        else if (Mark>=36){
            console.log(":Mark Average");
        }
        else {
            console.log(":Mark poor");
        }
        break;


        case "science":
        if (Mark>=87){
            console.log(":Mark Execelllent");
        }
        else if (Mark>=36){
            console.log(":Mark Average");
        }
        else {
            console.log(":Mark poor");
        }
        break;

        case "social":
        if (Mark>=80){
            console.log(":Mark Execelllent");
        }
        else if (Mark>=38){
            console.log(":Mark Average");
        }
        else {
            console.log(":Mark poor");
        }
        break;

    default:
        console.log("invalied")
}
