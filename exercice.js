$(".explication").hide();

$("button").mouseenter(function(){
	if($(':radio[id="q1rep2"]:checked').val()){  //VERIF QUESTION 1
		$('#imgq1').attr('src','img/bon.png');
		$('#p1').css({'color':'#36e812'});
} 	
	else {
		$('#imgq1').attr('src','img/mauvais.png');
		$('#p1').css({'color':'red'});
}
	if($(':radio[id="q2rep3"]:checked').val()){  //VERIF QUESTION 2
		$('#imgq2').attr('src','img/bon.png');
		$('#p2').css({'color':'#36e812'});
}
	else {
		$('#imgq2').attr('src','img/mauvais.png');
		$('#p2').css({'color':'red'});
}
	if($(':radio[id="q3rep1"]:checked').val()){  //VERIF QUESTION 3
		$('#imgq3').attr('src','img/bon.png');
		$('#p3').css({'color':'#36e812'});
}
	else {
		$('#imgq3').attr('src','img/mauvais.png');
		$('#p3').css({'color':'red'});
}
	if($(':radio[id="q4rep2"]:checked').val()){  //VERIF QUESTION 4
		$('#imgq4').attr('src','img/bon.png');
		$('#p4').css({'color':'#36e812'});
}
	else {
		$('#imgq4').attr('src','img/mauvais.png');
		$('#p4').css({'color':'red'});
}


$(".explication").show();
}).mouseleave(function(){
	$(".explication").hide();
	$('.image').attr('src','img/question.png');
});
