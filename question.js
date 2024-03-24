function Question(questionText, answerChoice, correctAnswer)
{
    this.questionText = questionText;
    this.answerChoice = answerChoice;
    this.correctAnswer = correctAnswer;
    
}

Question.prototype.checkAnswer = function(answer){
    return answer == this.correctAnswer
}

let questions = [
    new Question("1-Javascript ne zaman yaradilib?", {a:"2000", b:"1999", c:"2001"}, "a"),
    new Question("2-Javascript ne zaman yaradilib?", {a:"2000", b:"1999", c:"2001"}, "a"),
    new Question("3-Javascript ne zaman yaradilib?", {a:"2000", b:"1999", c:"2001"}, "a"),
    new Question("4-Javascript ne zaman yaradilib?", {a:"2000", b:"1999", c:"2001"}, "a"),
];