const dinazor=document.getElementById("dinazor");
const kaktus=document.getElementById("kaktus");

function jump(){
    if(dinazor.classList !="jump"){
        dinazor.classList.add("jump");

        setTimeout(function(){

            dinazor.classList.remove("jump");
    },300);
    }
    
   
}

var isAlive=setInterval(function(){
    var dinazortop = parseInt(window.getComputedStyle(dinazor).getPropertyValue("top"));
    var kaktusleft=parseInt(window.getComputedStyle(kaktus).getPropertyValue("left"));

    if(kaktusleft< 50 && kaktusleft > 0 && dinazortop >=140){
        alert("oyun bitti...")
    }
},10);

document.addEventListener("keydown",function(event){
    jump();

})