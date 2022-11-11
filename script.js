window.onload = function(){
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove);
}

function calculateLove(){
    let yourName = document.getElementById("your-name").value;
    let crushName = document.getElementById("crush-name").value;
    

    if(yourName !="" && crushName != ""){
        let percentage = Math.floor(Math.random() * 25) + 70;
        document.getElementById("result-message").innerHTML = yourName +" " +  "and" + " "  +crushName + "'s chance of ❤ is";
        document.getElementById("result-percentage").innerHTML = percentage.toString() + "%"
    }
    else{
        document.getElementById("result-message").innerHTML = "Oops Invalid Input...Please Try Again!"
    }

}



