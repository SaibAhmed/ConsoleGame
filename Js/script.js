function Questions(question,answers,correct){
    this.question=question;
    this.answers=answers;
    this.correct=correct;
}

Questions.prototype.displayQuestions =
    function() {
    console.log(this.question);
    
    for(var i=0; i < this.answers.length;i++){
        console.log(i+" : "+this.answers[i]);
    }
}

Questions.prototype.checkAnswer =
    function(ans){
    if(ans==this.correct){
        console.log("correct answer");
    }else{
        console.log("Wrong answer");
    }
}
var q1 = new Questions("Is JavaScript the coolest programming language in the world?" ,
                      ["yes","no"], 0);

var q2 = new Questions("what is the name of the course\'s teacher?" ,
                      ["john","michel","jonas"], 2);

var q3 = new Questions("what does the best describe coding?" ,
                      ["boring","hard","fun","tedious"], 2);

var questions = [q1,q2,q3];
var n = Math.floor(Math.random() * questions.length);
questions[n].displayQuestions();

var answer = parseInt(prompt("please select the correct answer."));
questions[n].checkAnswer(answer);