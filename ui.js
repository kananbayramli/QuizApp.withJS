function UI() {
    this.btn_start = document.querySelector(".btn_start"),
    this.next_btn = document.querySelector(".next_btn"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.option_list = document.querySelector(".option_list"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
}


UI.prototype.showQuestion = function(sual){
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
    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll(".option");

    for(let opt of option)
    {
        opt.setAttribute("onclick", "optionSelected(this)");
    }
}