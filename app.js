var starbtn = false;

function secondPg(){

   var getSecondPg = document.querySelectorAll(".container2");
   var getFirstPg = document.querySelectorAll(".container1")
    
   // creating the if stament for hidding and displaying an element when hitting start button
   if (starbtn === false) {
       
        // changing 
        document.getElementById("container1").style.display = "none";

        console.log("pears");

        document.getElementById("container2").style.visibility = "visible";

        console.log("apples");

        document.getElementById("container3").style.visibility = "visible";

        console.log("banna");

        // create the start time for the timer
        var timeLeft = 30;
         //create the timer interval
        var  counter = setInterval(function(){
           //use the id in html document to display and count down the time with a message
            document.getElementById("container3").innerHTML = "<h2>"+"You have " + timeLeft + " seconds remaining!!!" + "</h2>";
            timeLeft -= 1;

            // create an if statment for when the timer is done it replaces the other text to display something else.
            if(timeLeft <= 0){
              clearInterval(counter);
              document.getElementById("container3").innerHTML =  "<h2>" + "TIMES UP !!" + "</h2>";

         }   
      }, 1000); 
   }
};