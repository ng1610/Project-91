player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML= player1_name+ ":";
document.getElementById("player2_name").innerHTML= player2_name+ ":";

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("question_player").innerHTML="Question Turn- " + player1_name;
document.getElementById("answer_player").innerHTML="Answer Turn- " + player2_name;

function send(){
    number1=document.getElementById("Number1").value;
    number2=document.getElementById("Number2").value;
    actual_answer=parseInt(number1)*parseInt(number2);

    question_number="<h4 id='number-display'>"+ number1 + " x " + number2 + "</h4>";
    input_box="<br> Answer: <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row= question_number + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("Number1").value="";
    document.getElementById("Number2").value="";
}
