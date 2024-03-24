 const quiz = new Quiz(questions);
 const ui = new UI();

ui.btn_start.addEventListener("click", function(){
    ui.quiz_box.classList.add("active");
    ui.showQuestion( quiz.getQuestion());
    questionNumber(quiz.questionIndex +1, quiz.questions.length);
    ui.next_btn.classList.remove("show");
});

ui.next_btn.addEventListener("click", function(){
    if(quiz.questions.length != quiz.questionIndex + 1){
        quiz.questionIndex += 1;
        ui.showQuestion( quiz.getQuestion());
        questionNumber(quiz.questionIndex +1, quiz.questions.length);
        ui.next_btn.classList.remove("show");
    }else{
        console.log("Suallar bitti!");
    }
});


function optionSelected(option)    //bu option bizim kliklediyimiz optionu getirecek
{
    let answer = option.querySelector("span b").textContent;  //variantlari getirir
    let question = quiz.getQuestion();
    if(question.checkAnswer(answer)){
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for(let i=0; i < ui.option_list.children.length ; i++)
    {
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.next_btn.classList.add("show");
}


function questionNumber(sualSira, toplamSual)
{
    let tag = `<span class="badge bg-warning">${sualSira}/${toplamSual}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}







