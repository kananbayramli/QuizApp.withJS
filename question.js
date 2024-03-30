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
    new Question("1-Javascript dilini istifade etmir?", {a:"React", b:"Angular", c:"Asp Net"}, "c"),
    new Question("2-Frontent terefinde deyil?", {a:"Css", b:"Html", c:"Sql"}, "c"),
    new Question("3-Javascript paketi hansidir?", {a:"Node.js", b:"Npm", c:"Nuget"}, "b"),
    new Question("4-Backend terefinde deyerlenir?", {a:"node.js", b:"vue.js", c:"typescript"}, "a"),
];