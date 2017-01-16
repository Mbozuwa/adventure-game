// javascript library for simple game development

document.getElementById('option1').innerHTML = 'Go!';
document.getElementById('level_title').innerHTML = 'Dragon Ball Collecter';

var db1 = false;

// jquery variant
//$('#option1').html('Dit is keuze 1');


// https://www.youtube.com/watch?v=4ba1BqJ4S2M



function Level1() {
	console.log("Level1()");
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Next';
	opt1.setAttribute("onclick", "javascript:Level2()");

	document.getElementById('level_title').innerHTML = 'Intro';
	document.getElementById('level_image').src = 'img/cellgames.jpg';

	hidegoku();
	showlach();
}

function Level2() {
	console.log("Level2()");
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Next';
	opt1.setAttribute("onclick", "javascript:level3()");

	document.getElementById('level_title').innerHTML = 'Intro';
	document.getElementById('level_image').src = 'img/cellgames.jpg';

	showtext();
}

function level3() {
	hidetext();
	hidelach();
	console.log("level3()");
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go to Chi Chis place';
	opt1.setAttribute("onclick", "javascript:level4()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go to wasteland';
	opt2.setAttribute("onclick", "javascript:level5()");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Go to desert';
	opt3.setAttribute("onclick", "javascript:level6()");

	document.getElementById('level_title').innerHTML = 'Kami lookout';
	document.getElementById('level_image').src = 'img/beginscherm.png';
}

function level4(){						// Chi Chi's place //
	console.log("level4()")
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go to Capsule Corp';
	opt1.setAttribute("onclick", "javascript:level4a()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go to Roshi Island';
	opt2.setAttribute("onclick", "javascript:level10()");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Go Back';
	opt3.setAttribute("onclick", "javascript:level3()");

	document.getElementById('level_title').innerHTML = 'chi chi`s place';
	document.getElementById('level_image').src = 'img/goku_house.jpg';
}

function level4a(){ 					// Capsule Corp // 
	console.log("level4a()")
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go to the backyard';
	opt1.setAttribute("onclick", "javascript:level4aa()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go back';
	opt2.setAttribute("onclick", "javascript:level4()");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = '';
	opt3.setAttribute("onclick", "javascript()");

	document.getElementById('level_title').innerHTML = 'Capsule Corp';
	document.getElementById('level_image').src = 'img/capsulecorp.png';
}

function level4aa(){					// Capsule Corp Backyard //
	console.log("level4aa()")
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Summon Shenron';
	opt1.setAttribute("onclick", "javascript:level4aaa()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go back';
	opt2.setAttribute("onclick", "javascript:level4a()");

	document.getElementById('level_title').innerHTML = 'Backyard';
	document.getElementById('level_image').src = 'img/capsuleback.jpg';
}

function level5(){						// Wasteland // 
	console.log("level5()")
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go to the left';
	opt1.setAttribute("onclick", "javascript:level7()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go to the right';
	opt2.setAttribute("onclick", "javascript:level8()");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Go Back';
	opt3.setAttribute("onclick", "javascript:level3()");

	document.getElementById('level_title').innerHTML = 'Wasteland';
	document.getElementById('level_image').src = 'img/wasteland.jpg';
}

function level7(){						// Landscape left // 
	console.log("level7()")
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go to the Mountains';
	opt1.setAttribute("onclick", "javascript:level7a()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go Back';
	opt2.setAttribute("onclick", "javascript:level5()");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = '';
	opt3.setAttribute("onclick", "javascript:level()");

	document.getElementById('level_title').innerHTML = 'landscape left';
	document.getElementById('level_image').src = 'img/landschap1.png';
}

function level7a(){						// Mountains // 
	console.log("level7a()")
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Complete Game!';
	opt1.setAttribute("onclick", "javascript:level7aa()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go back';
	opt2.setAttribute("onclick", "javascript:level7()");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = '';
	opt3.setAttribute("onclick", "javascript:level()");

	document.getElementById('level_title').innerHTML = 'Mountains';
	document.getElementById('level_image').src = 'img/Mountain.png';
}

function level7aa(){						// Fail // 
	console.log("level7a()")
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Start over!';
	opt1.setAttribute("onclick", "javascript:Level1()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = '';
	opt2.setAttribute("onclick", "javascript:level()");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = '';
	opt3.setAttribute("onclick", "javascript:level()");

	document.getElementById('level_title').innerHTML = 'You Lost!';
	document.getElementById('level_image').src = 'img/troll.png';
}


function level8(){						// Landscape right // 
	console.log("level8()")
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go further south';
	opt1.setAttribute("onclick", "javascript:level9()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go back';
	opt2.setAttribute("onclick", "javascript:level5()");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = '';
	opt3.setAttribute("onclick", "javascript:level()");

	document.getElementById('level_title').innerHTML = 'landscape right';
	document.getElementById('level_image').src = 'img/landschap2.png';
}

function level9(){						// Landscape South // 
	console.log("'level9()")
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go to North City';
	opt1.setAttribute("onclick", "javascript:level9()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go back';
	opt2.setAttribute("onclick", "javascript:level8()");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = '';
	opt3.setAttribute("onclick", "javascript:level()");

	document.getElementById('level_title').innerHTML = 'landscape South';
	document.getElementById('level_image').src = 'img/landschap3.png';
}


function level10(){						// roshi // 
	console.log("level10()")
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = '';
	opt1.setAttribute("onclick", "javascript:level()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go back';
	opt2.setAttribute("onclick", "javascript:level4()");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = '';
	opt3.setAttribute("onclick", "javascript:level()");

	document.getElementById('level_title').innerHTML = 'Roshi Island';
	document.getElementById('level_image').src = 'img/roshi.png';
}





function hidegoku() {
    document.getElementById('intro_goku').style.visibility = 'hidden';
}

function showlach() {
	document.getElementById('intro2_goku').style.display = "block";
}

function hidelach() {
	document.getElementById('intro2_goku').style.display = 'none'
}

function showtext() {
	document.getElementById('intro_text').style.display = "block";
}

function hidetext() {
	document.getElementById('intro_text').style.display = "none";
}

function showroshi() {
	document.getElementById('master_roshi').style.display = "visibility"
}