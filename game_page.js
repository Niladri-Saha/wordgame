player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "question turn-" + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn-" + player2_name;

function send() {
    var get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    char1 = word.charAt(1);
    length = Math.floor(word.length / 2);
    char2 = word.charAt(length);
    length2 = word.length - 1;
    char3 = word.charAt(length2);

    rchar1 = word.replace(char1, "_");
    rchar2 = rchar1.replace(char2, "_");
    rchar3 = rchar2.replace(char3, "_");

    question = "<h4 id='word_display'>Q." + rchar3 + "</h4>";
    inputbox = "<br>answer :<input type='text' id='input_check_box'>";
    btn = "<br><button class='btn btn-info' onclick='check()'>check</button>";
    row = question + inputbox + btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").innerHTML = "";
}
answer_turn="player2";
question_turn="player1";
function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case - " + answer);
    if(answer == word){
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
     if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;   
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;   
    }
    document.getElementById("output").innerHTML="";
}