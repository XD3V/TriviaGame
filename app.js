var starbtn = false;

function secondPg(){

   var getSecondPg = document.querySelectorAll(".container2");
   var getFirstPg = document.querySelectorAll(".container1")
    
   // creating the if stament for hidding and displaying an element when hitting start button
   if (starbtn === false) {

    document.getElementById("container2").style.visibility = "visible";

        console.log("apples");

    document.getElementById("container1").style.display = "none";

        console.log("pears");

        document.getElementById("#container3").style.display = "visible";

        console.log("banna");
   };
};