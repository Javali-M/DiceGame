var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomdicesrc1 = "images/"+"dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomdicesrc1);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomdicesrc2 = "images/"+"dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomdicesrc2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Congrats! Player 1 wins."
}
else{
    document.querySelector("h1").innerHTML="Congrats! Player 2 wins."
}