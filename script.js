const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const scoreCard = document.querySelector('.scoreCard');
const alertBox = document.querySelector('.alert');
const startBtn = document.querySelector('.startBtn');
const timer = document.querySelector('.timer');

// Make an array of objects that stores question, choices of question and answer
const quiz = [
    // Your quiz questions here...
    {
        question: "Q. Which of the following is not a CSS box model property?",
        choices: ["margin", "padding", "border-radius", "border-collapse"],
        answer: "border-collapse"
    },
    {
        question: "Q. Which of the following is not a valid way to declare a function in JavaScript?",
        choices: ["function myFunction() {}", " let myFunction = function() {};", "myFunction: function() {}", "const myFunction = () => {};"],
        answer: "myFunction: function() {}"
    },
    {
        question: "Q. Which of the following is not a JavaScript data type?",
        choices: ["string", "boolean", "object", "float"],
        answer: "float"
    },
    {
        question: "Q. What is the purpose of the this keyword in JavaScript?",
        choices: ["It refers to the current function.", "It refers to the current object.", "It refers to the parent object.", " It is used for comments."],
        answer: "It refers to the current object."
    },
    {
            question: "Q. What is the correct CSS syntax to change the background color of a webpage to blue?",
            choices: ["body {background-color: blue;}", "background-color: blue;", "<body style='background-color: blue;'>", "<background>blue</background>"],
            answer: "body {background-color: blue;}"
        },
        {
            question: "Q. What does the HTML <br> tag stand for?",
            choices: ["Break", "Bold", "Bullet", "Block"],
            answer: "Break"
        },
        {
            question: "Q. Which of the following is a correct way to create an array in JavaScript?",
            choices: ["let colors = [];", "colors = {};", "let colors = {};", "colors = []"],
            answer: "let colors = [];"
        },
        {
            question: "Q. What is the result of '10' === 10 in JavaScript?",
            choices: ["true", "false", "undefined", "NaN"],
            answer: "false"
        },
        {
            question: "Q. What is the purpose of the CSS property 'position: relative;'?",
            choices: ["Positions an element relative to its normal position.", "Positions an element relative to the viewport.", "Positions an element absolutely within its containing element.", "Aligns text vertically within an element."],
            answer: "Positions an element relative to its normal position."
        },
        {
            question: "Q. How do you declare a variable with block scope in JavaScript?",
            choices: ["var", "let", "const", "block"],
            answer: "let"
        },
        {
            question: "Q. Which of the following is NOT a valid HTML tag?",
            choices: ["<header>", "<section>", "<main>", "<division>"],
            answer: "<division>"
        },
        {
            question: "Q. What is the purpose of the HTML <meta> tag?",
            choices: ["Defines a paragraph of text.", "Defines metadata about the HTML document.", "Specifies a navigation link.", "Creates a list item."],
            answer: "Defines metadata about the HTML document."
        },
        {
            question: "Q. What does CSS specificity refer to?",
            choices: ["The order in which styles are applied to elements.", "The importance of a style declaration.", "The priority of different types of selectors.", "The uniqueness of a selector's identifier."],
            answer: "The priority of different types of selectors."
        },
        {
            question: "Q. How do you comment out multiple lines in JavaScript?",
            choices: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */", "' This is a comment"],
            answer: "/* This is a comment */"
        },
        {
            question: "Q. Which HTML tag is used to define a table row?",
            choices: ["<tr>", "<table>", "<td>", "<th>"],
            answer: "<tr>"
        },
        {
            question: "Q. What does the JavaScript Array method 'map()' do?",
            choices: ["Modifies the original array by adding or removing elements.", "Creates a new array with the results of calling a provided function on every element in the calling array.", "Returns the first element that satisfies the testing function.", "Reverses the order of the elements in an array."],
            answer: "Creates a new array with the results of calling a provided function on every element in the calling array."
        },
        {
            question: "Q. Which of the following is NOT a valid CSS length unit?",
            choices: ["px", "em", "rem", "pt"],
            answer: "pt"
        },
        {
            question: "Q. How do you select an element with the id 'example' in CSS?",
            choices: ["#example", ".example", "example", "<example>"],
            answer: "#example"
        },
        {
            question: "Q. What is the purpose of the JavaScript '&&' operator?",
            choices: ["Logical OR", "Logical AND", "Equality comparison", "Concatenation"],
            answer: "Logical AND"
        },
        {
            question: "Q. What does the CSS property 'overflow: hidden;' do?",
            choices: ["Displays only the content that fits within an element's specified dimensions.", "Hides any content that overflows the boundaries of an element.", "Forces an element's content to scroll horizontally if it overflows its container.", "Specifies the behavior of an element's children when the children are too big for the parent."],
            answer: "Hides any content that overflows the boundaries of an element."
        },
        {
            question: "Q. What does the HTML <p> tag stand for?",
            choices: ["Paragraph", "Position", "Padding", "Preformatted"],
            answer: "Paragraph"
        },
        {
            question: "Q. How do you declare a multi-line string in JavaScript?",
            choices: ["'This is a multi-line string'", "\"This is a multi-line string\"", "`This is a multi-line string`", "(This is a multi-line string)"],
            answer: "`This is a multi-line string`"
        },
        {
            question: "Q. What does the JavaScript Array method 'filter()' do?",
            choices: ["Adds new elements to an array.", "Removes elements from an array based on a condition.", "Sorts the elements of an array.", "Concatenates two or more arrays."],
            answer: "Removes elements from an array based on a condition."
        },
        {
            question: "Q. Which of the following is NOT a valid CSS color value?",
            choices: ["red", "#00FF00", "rgb(255, 0, 0)", "hsl(120, 100%, 50%)"],
            answer: "red"
        },
        {
            question: "Q. What is the purpose of the HTML <img> tag?",
            choices: ["Defines an image within a webpage.", "Creates a hyperlink.", "Displays a block of preformatted text.", "Defines a list item."],
            answer: "Defines an image within a webpage."
        },
        {
            question: "Q. How do you select all elements of a certain class in CSS?",
            choices: [".classname", "#classname", "<classname>", "*classname"],
            answer: ".classname"
        },
        {
            question: "Q. What is the purpose of the JavaScript '||' operator?",
            choices: ["Logical OR", "Logical AND", "Equality comparison", "Concatenation"],
            answer: "Logical OR"
        },
        {
            question: "Q. What does the CSS property 'float: left;' do?",
            choices: ["Aligns an element's content to the left within its containing element.", "Floats an element to the left side of its containing element, allowing other elements to wrap around it.", "Removes an element from the normal flow of the document and positions it at the left edge of its containing element.", "Aligns an element's content to the left edge of the viewport."],
            answer: "Floats an element to the left side of its containing element, allowing other elements to wrap around it."
        },
        {
            question: "Q. What does the HTML <ol> tag stand for?",
            choices: ["Ordered List", "Open List", "Option List", "Organized List"],
            answer: "Ordered List"
        },
        {
            question: "Q. How do you round the number 7.25 to the nearest integer in JavaScript?",
            choices: ["Math.round(7.25)", "Math.ceil(7.25)", "Math.floor(7.25)", "round(7.25)"],
            answer: "Math.round(7.25)"
        },
        {
            question: "Q. What is the purpose of the JavaScript Array method 'forEach()'?",
            choices: ["Creates a new array with the results of calling a provided function on every element in the calling array.", "Modifies the original array by adding or removing elements.", "Executes a provided function once for each array element.", "Returns the index of the first element that satisfies the testing function."],
            answer: "Executes a provided function once for each array element."
        },
        {
            question: "Q. Which of the following is NOT a valid CSS display property value?",
            choices: ["block", "inline", "grid", "center"],
            answer: "center"
        },
        {
            question: "Q. What is the purpose of the HTML <div> tag?",
            choices: ["Defines a division or a section of a webpage.", "Creates a hyperlink.", "Specifies a navigation link.", "Defines a list item."],
            answer: "Defines a division or a section of a webpage."
        },
        {
            question: "Q. How do you declare a variable with global scope in JavaScript?",
            choices: ["var", "let", "const", "global"],
            answer: "var"
        },
        {
            question: "Q. What is the purpose of the CSS property 'margin: auto;'?",
            choices: ["Centers an element horizontally within its containing element.", "Adds space between the border and content of an element.", "Moves an element away from the edge of its containing element.", "Aligns an element's content to the top edge of its containing element."],
            answer: "Centers an element horizontally within its containing element."
        },
        {
            question: "Q. What is the purpose of the HTML <a> tag?",
            choices: ["Defines an anchor or a hyperlink.", "Defines an image.", "Defines a list item.", "Defines a paragraph."],
            answer: "Defines an anchor or a hyperlink."
        },
        {
            question: "Q. How do you select the first element of a class in CSS?",
            choices: [".classname:first", ".classname:first-child", ".classname:first-of-type", ".classname:first-element"],
            answer: ".classname:first-child"
        },
        {
            question: "Q. What does the JavaScript Array method 'splice()' do?",
            choices: ["Adds new elements to an array.", "Removes elements from an array based on a condition.", "Sorts the elements of an array.", "Adds or removes elements from an array."],
            answer: "Adds or removes elements from an array."
        },
        {
            question: "Q. Which of the following is NOT a valid CSS font property?",
            choices: ["font-family", "font-size", "font-color", "font-weight"],
            answer: "font-color"
        },
        {
            question: "Q. What does the CSS property 'text-align: center;' do?",
            choices: ["Aligns an element's content to the center horizontally within its containing element.", "Aligns an element's content to the center vertically within its containing element.", "Aligns an element's content to the left within its containing element.", "Aligns an element's content to the right within its containing element."],
            answer: "Aligns an element's content to the center horizontally within its containing element."
        },
        {
            question: "Q. How do you declare a JavaScript object?",
            choices: ["var myObj = {};", "let myObj = [];", "const myObj = {};", "myObj = {}"],
            answer: "const myObj = {};"
        },
        {
            question: "Q. What is the purpose of the HTML <span> tag?",
            choices: ["Defines a small section of text within a larger document.", "Defines a division or a section of a webpage.", "Specifies a navigation link.", "Creates a hyperlink."],
            answer: "Defines a small section of text within a larger document."
        },
        {
            question: "Q. How do you apply a hover effect to an element in CSS?",
            choices: ["Using the :hover pseudo-class", "Using the :active pseudo-class", "Using the :focus pseudo-class", "Using the :visited pseudo-class"],
            answer: "Using the :hover pseudo-class"
        },
        {
            question: "Q. What is the purpose of the JavaScript '===' operator?",
            choices: ["Strict equality comparison", "Equality comparison", "Assignment", "Concatenation"],
            answer: "Strict equality comparison"
        },
        {
            question: "Q. What does the CSS property 'box-sizing: border-box;' do?",
            choices: ["Includes padding and border in the element's total width and height.", "Specifies the size of the element's box.", "Aligns an element's content to the center.", "Adds space between the border and content of an element."],
            answer: "Includes padding and border in the element's total width and height."
        },
        {
            question: "Q. How do you create a function in JavaScript?",
            choices: ["function myFunction() {}", "let myFunction = function() {};", "myFunction: function() {}", "const myFunction = () => {};"],
            answer: "function myFunction() {}"
        },
        {
            question: "Q. What is the result of '10' + 5 in JavaScript?",
            choices: ["15", "105", "10 + 5", "NaN"],
            answer: "105"
        },
        {
            question: "Q. What does the JavaScript Array method 'concat()' do?",
            choices: ["Adds new elements to an array.", "Removes elements from an array based on a condition.", "Combines two or more arrays into a new array.", "Sorts the elements of an array."],
            answer: "Combines two or more arrays into a new array."
        },
        {
            question: "Q. Which of the following is NOT a valid HTML attribute?",
            choices: ["src", "href", "class", "type"],
            answer: "type"
        },
        {
            question: "Q. What does the CSS property 'display: inline-block;' do?",
            choices: ["Displays an element as an inline-level block container.", "Displays an element as a block-level container.", "Hides an element.", "Floats an element to the left or right of its containing element."],
            answer: "Displays an element as an inline-level block container."
        },

];

// Making Variables
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 15;
let timerID = null;

// Arrow Function to Show Questions
const showQuestions = () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;

    choicesBox.textContent = "";
    const shuffledChoices = shuffleArray(questionDetails.choices);
    for (let i = 0; i < shuffledChoices.length; i++) {
        const currentChoice = shuffledChoices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click', () => {
            if (choiceDiv.classList.contains('selected')) {
                choiceDiv.classList.remove('selected');
            }
            else {
                choiceDiv.classList.add('selected');
            }
        });
    }

    startTimer();
}

// Function to shuffle an array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to check answers
const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (!selectedChoice) {
        displayAlert("Select your answer");
        return;
    }

    if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
        displayAlert("Correct Answer!");
        score++;
    }
    else {
        displayAlert(`Wrong Answer! ${quiz[currentQuestionIndex].answer} is the Correct Answer`);
    }
    timeLeft = 15;
    currentQuestionIndex++;
    if (currentQuestionIndex < 5) {
        showQuestions();
    }
    else {
        stopTimer();
        showScore();
    }
}

// Function to show score
const showScore = () => {
    questionBox.textContent = "";
    choicesBox.textContent = "";
    scoreCard.textContent = `You Scored ${score} out of 5!`;
    displayAlert("You have completed this quiz!");
    nextBtn.textContent = "Play Again";
    quizOver = true;
    timer.style.display = "none";
}

// Function to Show Alert
const displayAlert = (msg) => {
    alertBox.style.display = "block";
    alertBox.textContent = msg;
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 2000);
}

// Function to Start Timer
const startTimer = () => {
    clearInterval(timerID); // Check for any existing timers
    timer.textContent = timeLeft;

    const countDown = () => {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft === 0) {
            const confirmUser = confirm("Time Up!!! Do you want to play the quiz again");
            if (confirmUser) {
                timeLeft = 15;
                startQuiz();
            }
            else {
                startBtn.style.display = "block";
                container.style.display = "none";
                return;
            }
        }
    }
    timerID = setInterval(countDown, 1000);
}

// Function to Stop Timer
const stopTimer = () => {
    clearInterval(timerID);
}

// Function to Start Quiz
const startQuiz = () => {
    timeLeft = 15;
    timer.style.display = "flex";
    shuffleArray(quiz); // Shuffle the quiz questions
    currentQuestionIndex = 0;
    score = 0;
    showQuestions();
}

// Adding Event Listener to Start Button
startBtn.addEventListener('click', () => {
    startBtn.style.display = "none";
    container.style.display = "block";
    startQuiz();
});

nextBtn.addEventListener('click', () => {
    if (quizOver) {
        nextBtn.textContent = "Next";
        scoreCard.textContent = "";
        currentQuestionIndex = 0;
        quizOver = false;
        score = 0;
        startQuiz();
    }
    else {
        checkAnswer();
    }
});
