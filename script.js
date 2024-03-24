function Question(questionText, answerChoice, correctAnswer)
{
    this.questionText = questionText;
    this.answerChoice = answerChoice;
    this.correctAnswer = correctAnswer;
    
}

Question.prototype.checkAnswer = function(answer){
    return answer == this.answerChoice
}

let questions = [
    new Question("1-Javascript ne zaman yaradilib?", {a:"2000", b:"1999", c:"2001"}, "a"),
    new Question("2-Javascript ne zaman yaradilib?", {a:"2000", b:"1999", c:"2001"}, "a"),
    new Question("3-Javascript ne zaman yaradilib?", {a:"2000", b:"1999", c:"2001"}, "a"),
    new Question("4-Javascript ne zaman yaradilib?", {a:"2000", b:"1999", c:"2001"}, "a"),
];


 function Quiz(questions)
 {
    this.questions = questions;
    this.questionIndex = 0;
 }

 Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
 }

 const quiz = new Quiz(questions);


document.querySelector(".btn_start").addEventListener("click", function(){
    document.querySelector(".quiz_box").classList.add("active");
    showQuestion( quiz.getQuestion());
});


document.querySelector(".next_btn").addEventListener("click", function(){
    if(quiz.questions.length != quiz.questionIndex + 1){
        quiz.questionIndex += 1;
        showQuestion( quiz.getQuestion());
    }else{
        console.log("Suallar bitti!");
    }
});


function showQuestion(sual){
    let question = `<span>${sual.questionText}</span>`;
    let options = '';

    for(let cavab in sual.answerChoice)
    {
        options += 
        `
            <div class="option">
                <span><b>${cavab}</b>: ${sual.answerChoice[cavab]}</span>
            </div>
        `
    }

    document.querySelector(".question_text").innerHTML = question;
    document.querySelector(".option_list").innerHTML = options;
}






