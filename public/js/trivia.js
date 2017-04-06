window.onload = function () {

  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,

     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        'Which answer includes ONLY terminal commands used in GitBash?' : ['ls, cd, moo, rmdir','passion, persistence, practice, pattern-recognition', 'mkdir, ls, touch, cd..','-f, rm, mvp, NASA', 2],

        'Which answer includes ONLY git commands?' : ['git commit -m, git status, git pull, git push', 'get clone, git init, git er done, git branch' , 'git branches, glit ter, git add, git rm','gitty, git diff, git merge, git checkout', 0],

        'What is the purpose of express in NodeJS projects?' : ['Defines a routing trampoline which is used to perform different acrobatics based on HTTP Method and URL', 'Dynamically renders computers into purgatory','Provides a robust set of features to develop web and mobile applications', 'Allows to set up middle-monkeys to respond to HTTP Requests', 2],

        'What answer includes ONLY npm commands?' : ['config, impeach, whoami, help', 'start, reppin, cache, bae','pick, pack, prune, pumpernickel','init, npm, install, ls', 3],

        'What does npm init accomplish?' : ['Initializes the Node Package Manager', 'Cracks down on negligence, pessimism, and moping',' Navigates, performs, and manages','Sets up a Northern People March', 0],

        'What does git init accomplish?' : ['Initializes the Node Package Manager', 'Creates an new Git repository','Creates an AngularJS project folder','Sets of a grid', 1],

        'What is needed at the top of a HTML5 document?' : ['iife', 'script','<!DOCTYPE html>','$jQuery', 2],

        'What is the difference between <ul> and <ol> html tags?' : ['ul underlines and ol creates an overlay', '<ul> unordered list and <ol> ordered list','<ul> unlisted and <ol> overly-listed','<ul> used-listing and <ol> on-point list', 1],

        'What does CSS stand for?' : ['Cascading Style Sheets', 'Create Style Symmetry ','Caring Stamina Sophistication','Continued State Statue ', 0],

      };
  function loadQuestion(curr) {
  // loads all the question into the questionArea based on "current" variable.

    var question = Object.keys(allQuestions)[curr];

    questionArea.innerHTML = '';
    questionArea.innerHTML = question;
  }

  function loadAnswers(curr) {
  //loads answers of the given question, grabs the needed answer-array with the help of the current-variable, adds answers 'onclick'

    var answers = allQuestions[Object.keys(allQuestions)[curr]];

    answerArea.innerHTML = '';

    for (var i = 0; i < answers.length -1; i += 1) {
      var createDiv = document.createElement('div'),
          text = document.createTextNode(answers[i]);

      createDiv.appendChild(text);
      createDiv.addEventListener("click", checkAnswer(i, answers));


      answerArea.appendChild(createDiv);
    }
  }

  function checkAnswer(i, arr) {
    // checks answers for true or false and loads completed questions. Also, created done message when done.

    return function () {
      var givenAnswer = i,
          correctAnswer = arr[arr.length-1];

      if (givenAnswer === correctAnswer) {
        addChecker(true);
      } else {
        addChecker(false);
      }

      if (current < Object.keys(allQuestions).length -1) {
        current += 1;

        loadQuestion(current);
        loadAnswers(current);
      } else {
        questionArea.innerHTML = 'Done';
        answerArea.innerHTML = '';
      }

    };
  }

  function addChecker(bool) {
  // adds a div to check for correct or false

    var createDiv = document.createElement('div'),
        txt       = document.createTextNode(current + 1);

    createDiv.appendChild(txt);

    if (bool) {

      createDiv.className += 'correct';
      checker.appendChild(createDiv);
    } else {
      createDiv.className += 'false';
      checker.appendChild(createDiv);
    }
  }


  // loads quiz on pg first
  loadQuestion(current);
  loadAnswers(current);

};

/* navbar-Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
