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
    document.querySelector(".next_btn").classList.remove("show");
});


document.querySelector(".next_btn").addEventListener("click", function(){
    if(quiz.questions.length != quiz.questionIndex + 1){
        quiz.questionIndex += 1;
        showQuestion( quiz.getQuestion());
    }else{
        console.log("Suallar bitti!");
    }
});




const option_list = document.querySelector(".option_list");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

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

    document.querySelector(".next_btn").classList.remove("show");



    document.querySelector(".question_text").innerHTML = question;
    option_list.innerHTML = options;

    const option = option_list.querySelectorAll(".option");

    for(let opt of option)
    {
        opt.setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(option)    //bu option bizim kliklediyimiz optionu getirecek
{
    let answer = option.querySelector("span b").textContent;  //variantlari getirir
    let question = quiz.getQuestion();

    if(question.checkAnswer(answer)){
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", correctIcon);
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", incorrectIcon);
    }

    for(let i=0; i < option_list.children.length ; i++)
    {
        option_list.children[i].classList.add("disabled");
    }

    document.querySelector(".next_btn").classList.add("show");

}






