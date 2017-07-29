
function submitAnswers(){
	var total = 5;
	var score = 0;

	var q1 = document.forms["Quizform"] ["q1"].value;
	alert(q1);
	var q2 = document.forms["Quizform"] ["q2"].value;
	var q3 = document.forms["Quizform"] ["q3"].value;
	var q4 = document.forms["Quizform"] ["q4"].value;
	var q5 = document.forms["Quizform"] ["q5"].value;
	

	if(q1 == null || q1 == ''){
		alert("Question one not answered");
		return false;
	}

	if(q2 == null || q2 == ''){
		alert("Question two not answered");
		return false;
	}

	if(q3 == null || q3 == ''){
		alert("Question three not answered");
		return false;
	}

	if(q4 == null || q4 == ''){
		alert("Question four not answered");
		return false;
	}
 	
	if(q5 == null || q5 == ''){
		alert("Question five not answered");
		return false;
	}

	

 	var answers = ["c","c","b","a","a"]

 	if(q1 == answers[0]){
 		score ++;
 	}

 	if(q2 == answers[1]){
 		score ++;
 	}

 	if(q3 == answers[2]){
 		score ++;
 	}

 	if(q4 == answers[3]){
 		score ++;
 	}

 	if(q5 == answers[4]){
 		score ++;
 	}


 	alert('You have scored' +score + 'out of' +total);
 }

