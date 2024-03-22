function Question(questionText, answerChoice, correctAnswer)
{
    this.questionText = questionText;
    this.answerChoice = answerChoice;
    this.correctAnswer = correctAnswer;
    this.checkAnswer = function(answer){
        return answer == this.answerChoice
    }
}

let question1 = new Question(".NET necenci ilde yaradilib?", {a:"2000", b:"1999", c:"2001"}, "c");
let question2 = new Question("Javascript ne zaman yaradilib?", {a:"2000", b:"1999", c:"2001"}, "a");

let questions = [
    new Question("Javascript ne zaman yaradilib?", {a:"2000", b:"1999", c:"2001"}, "a"),
    new Question("Javascript ne zaman yaradilib?", {a:"2000", b:"1999", c:"2001"}, "a"),
    new Question("Javascript ne zaman yaradilib?", {a:"2000", b:"1999", c:"2001"}, "a")
];

console.log(question1.checkAnswer("c"));
console.log(question1.checkAnswer("a"));