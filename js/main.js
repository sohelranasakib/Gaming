let playerone = document.querySelector(".playerone")
let playeronemen = document.querySelector(".playeronemen")
let playeroneinput = document.querySelector(".playeroneinput")
let playeronebtn = document.querySelector(".playeronebtn")
let playeroneerr = document.querySelector(".playeroneerr")

let playertwo = document.querySelector(".playertwo")
let playertwomen = document.querySelector(".playertwomen")
let playertwoinput = document.querySelector(".playertwoinput")
let playertwobtn = document.querySelector(".playertwobtn")
let playertwoerr = document.querySelector(".playertwoerr")
let success = document.querySelector(".success")
let chance = document.querySelector(".chance")


let playeronevalue;
let chancevalue = 3;

playeronebtn.addEventListener("click", ()=>{

if(playeroneinput.value){
if(playeroneinput.value - 10){
if(playeroneinput.value > 0 && playeroneinput.value < 10){
playeronevalue = playeroneinput.value
playertwo. style. display = "block"
playerone. style. display = "none"
}else{
    playeroneerr.innerHTML= "please inter number between 1 to 9"
}
}else{
    playeroneerr.innerHTML= "please inter number"
}
}else{
    playeroneerr.innerHTML= "please inter some value"
}
})

playertwobtn.addEventListener("click", ()=>{

if(playertwoinput.value){
if(playertwoinput.value - 10){
if(playertwoinput.value > 0 && playertwoinput.value < 10){
if(playertwoinput.value == playeronevalue){
    success.innerHTML ="win"
}else{
    if(chancevalue != 1){
        chancevalue--
        chance.innerHTML = chancevalue 
        
    }else{
        success.innerHTML ="lost"
        chance.innerHTML = ""
    }

}
}else{
    playertwoerr.innerHTML= "please inter number between 1 to 9"
}
}else{
    playertwoerr.innerHTML= "please inter number"
}
}else{
    playertwoerr.innerHTML= "please inter some value"
}
})