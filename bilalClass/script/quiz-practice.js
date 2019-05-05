var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    [ "What is the color of sky?", "blue", "orange", "green", "pink", A ] ,
    [ "What is the color of grass?", "blue", "green", "orange", "pink", B ] ,
    [ "What is the color of grass?", "blue", "green", "orange", "pink", B],
    [ "What is the color of grass?", "blue", "green", "orange", "pink", B]
];

function _(x){
    return document.getElementById(x);
}

function renderQuestion (){
    test = _("test");
    _("test_status").innerHTML = "Question"+ (pos+1)+ " of " +questions.length;
    question = questions[pos] [0];
    chA = questions[pos] [1];
    chB = questions[pos][2];
    chC = questions [post][3];
    test.innerHTML = "<h3>"+questions+"</h3>"
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA="<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB="<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC="<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'> Submit Answer</button>";


    function checkAnswer(){
        alert("Ok we will");
    }

window.addEventListener("load", renderQuestion, false);

}