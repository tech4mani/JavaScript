//Object
//1.create and access object properties(Labtop)
let Labtop={
    model:"ROG",
    color:"red",
    ram:"8Gb"
};
console.log(Labtop)

//2.Add object
let Labtop={
    model:"ROG",
    color:"red",
    ram:"8Gb"
};
Labtop['processor']="Ryzen 5 - 5600u"
console.log(Labtop)

//3.delete object
let Labtop={
    model:"ROG",
    color:"red",
    ram:"8Gb"
};
delete Labtop.ram;
console.log(Labtop)

//4.update object
let Labtop={
    model:"ROG",
    color:"red",
    ram:"8Gb"
};
Labtop['ram']="16Gb"
console.log(Labtop)

//2.Loop throw object using for and in

//1.Fetch all key value
let Labtop={
    model:"ROG",
    color:"red",
    ram:"8Gb"
};
for (key in Labtop){
    console.log(Labtop[key])
}

//2.Fetch all key 
let Labtop={
    model:"ROG",
    color:"red",
    ram:"8Gb"
};
for (key in Labtop){
    console.log(key)
}

//3.both key and value
let Labtop={
    model:"ROG",
    color:"red",
    ram:"8Gb"
};
for (key in Labtop){
    console.log(key+":"+Labtop[key])
}

//4.Nesting object inside object
let Labtop={
    model:"ROG",
    color:"red",
    ram:"8Gb",
    Proccessor:{
        model:"Ryze5-5600u",
        price:30000,
        speed:"120zh"
    }
};
console.log(Labtop)

//5.Method and object
let Labtop={
    model:"ROG",
    color:"red",
    ram:"8Gb",
    Proccessor:3000,
    updateProccessor(){
        return this.Proccessor + 2600
    }
};
console.log(Labtop.updateProccessor())

//Object reference.
let game={
    game_name:"criket",
    time:"10.am"
};
let games=game
games.time = "11.30.am"
console.log(game.time)

