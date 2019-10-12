var starbtn = false;
var userGuess = $("#question-form").click;
var getSecondPg = document.querySelectorAll(".container2");
var getFirstPg = document.querySelectorAll(".container1")
var resultPg = document.querySelectorAll(".result")
var timeLeft = 120;
//question 1
var myQuestions = [
   {
      question: "What would happen if two peices of the same metal were to touch eachother in space?",
      answers: [
         "Nothing",
         "Cold Welding",
         "Floats away"
      ],
      correctAnswer: 2
   },
   // question 2
   {
      question: "What is the nearest major galaxy closest to the Milky Way?",
      answers: [
         "Black Eye Galaxy",
         "Bode's Galaxy",
         "Andromeda Galaxy"
      ],
      correctAnswer: 2
   },
   // question 3
   {
      question: "What type of galaxy is the Milky Way?",
      answers: [
         "Barred Spiral Galaxy",
         "Spiral Galaxy",
         "Elliptical Galaxy"
      ],
      correctAnswer: 1
   },
   // question 4
   {
      question: "About how many stars are in the Milky Way?",
      answers: [
         "500-800 billion stars",
         "Over 9,000! Yet, under 10,000 stars",
         "200-400 billion stars"
      ],
      correctAnswer: 2
   },
   // question 5
   {
      question: "What is the true color of our sun?",
      answers: [
         "orange-yellow star",
         "red-orange star",
         "green-blue star"
      ], 
      correctAnswer: 2
   },
];
console.log(myQuestions);


var win = 0;
var loses= 0;
var unanswered = 0;
var questionContainer = $("#question-form");
for (var i = 0; i < myQuestions.length; i++) {
   // each answer form
   var questionBox = $("<div class='question-form'>");
   var qTag = $("<h1>" + myQuestions[i].question + "</h1>");

   questionBox.append(qTag);
   console.log(myQuestions[i].answers.length);
   for (var j = 0; j < myQuestions[i].answers.length; j++) {
      // create radio question
      var answer = $("<label>").text(myQuestions[i].answers[j])
      var radio = $("<input type='radio'>");
      // change with the radio attributes
      radio.attr('name', 'answers-' + i);
      radio.attr('value', myQuestions[i].answers[j]);
      // put the radio button into the question form  
      questionBox.append(answer);
      answer.append(radio);
      console.log(radio) 


   }
   questionContainer.append(questionBox);
   questionContainer.append('<br>');
}


function secondPg() {

 

   // creating the if stament for hidding and displaying an element when hitting start button
   if (starbtn === false) {

      // changing 
      document.getElementById("container1").style.display = "none";

    

      document.getElementById("container2").style.visibility = "visible";

      

      document.getElementById("container3").style.visibility = "visible";



      document.getElementById("question-form").style.visibility = "visible";

    

      // create the start time for the timer

      //create the timer interval
      var counter = setInterval(function () {
         
         //use the id in html document to display and count down the time with a message
         document.getElementById("container3").innerHTML = "<h2>" + "You have " + timeLeft + " seconds remaining!!!" + "</h2>";
         timeLeft -= 1; 

         console.log("Timer " + counter);
            }, 1000);
         // create an if statment for when the timer is done it replaces the other text to display something else.

 }
      };  
      function endPg(){ 
         var submit = false;
         if (submit === false) {
     
         if (timeLeft >= 0 && userGuess === myQuestions.correctAnswer){
            win++;
          

            document.getElementById("container3").style.display = "none";

            document.getElementById("question-form").style.display = "none";

            document.getElementById("result").innerHTML ="<h2>" + "Your  score is " + win + "<br>" + "Your incorrect score is " 
            + loses + "<br>" + "Your incorrect score is " +  "<br>" + "</h2>";
         }

         if (timeLeft >= 0 && userGuess!== myQuestions.correctAnswer ){
            loses++;
           

            document.getElementById("container3").style.display = "none";
 
            document.getElementById("question-form").style.display = "none";

            document.getElementById("result").innerHTML ="<h2>" + "Your  score is " + win + "<br>" + "Your incorrect score is " 
            + loses + "<br>" + "Your incorrect score is " +  "<br>" + "</h2>";

         }  if (timeLeft <= 0) {

            unanswered ++;

            document.getElementById("container3").style.display = "none";

            document.getElementById("question-form").style.display = "none";

            document.getElementById("result").innerHTML ="<h2>" + "Your  score is " + win + "<br>" + "Your incorrect score is " 
            + loses + "<br>" + "Your incorrect score is " +  "<br>" + "</h2>";
         }
         console.log("losses " + loses);
         console.log("unanswered " + unanswered);
         console.log("win " + win);
     }     
    } 
  
   
      
   


