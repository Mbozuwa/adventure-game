// javascript library for simple game development

document.getElementById('option1').innerHTML = 'Go!';
document.getElementById('level_title').innerHTML = 'Dragon Ball Collecter';

var db1 = false;
var db2 = false;
var db3 = false;
var db4 = false;
var db5 = false;
var db6 = false;
var db7 = false;
var alldb = false;

// jquery variant
//$('#option1').html('Dit is keuze 1');



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
	hidedb1();
	hidedb2();
	console.log("level3()");
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go to Chi Chis place';
	opt1.setAttribute("onclick", "javascript:level4()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go to Desert';
	opt2.setAttribute("onclick", "javascript:level5()");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Go to Wasteland';
	opt3.setAttribute("onclick", "javascript:level6()");

	document.getElementById('level_title').innerHTML = 'Kami lookout';
	document.getElementById('level_image').src = 'img/beginscherm.png';
}

function level4(){						// Chi Chi's place //
	showdb1();
	hidedb4();
	hideroshi();
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
	hidedb1();
	console.log("level4a()")
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go to the backyard';
	opt1.onclick = function() {

		if(alldb == true) {
			level4b();
		} else {
			alert('You dont have all the dragon balls');
		}
	}
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go back';
	opt2.setAttribute("onclick", "javascript:level4()");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = '';
	opt3.setAttribute("onclick", "javascript()");

	document.getElementById('level_title').innerHTML = 'Capsule Corp';
	document.getElementById('level_image').src = 'img/capsulecorp.png';
}

function level4b(){					// Capsule Corp Backyard //
	console.log("level4b()")
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Summon Shenron';
	opt1.setAttribute("onclick", "javascript:level4aaa()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go back';
	opt2.setAttribute("onclick", "javascript:level4a()");

	document.getElementById('level_title').innerHTML = 'Backyard';
	document.getElementById('level_image').src = 'img/capsuleback.jpg';
}

function level4c(){					// shenron //
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
	hidedb7();
	showdb2();

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

	document.getElementById('level_title').innerHTML = 'Desert';
	document.getElementById('level_image').src = 'img/wasteland.jpg';
}

function level7(){						// Landscape left /
	hidedb2();
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
	hidedb2();
	showdb3();
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
	hidedb3();
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
	hidedb2();
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
	opt1.innerHTML = 'Go to City (North)';	
	opt1.setAttribute("onclick", "javascript:level12()");
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
	hidedb1();
	showdb4();
	showroshi();
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

function level6(){						// Wasteland // 
	hidedb7();
	console.log("level6()")
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go to Tournament area';
	opt1.setAttribute("onclick", "javascript:level11()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go to the School';
	opt2.setAttribute("onclick", "javascript:level16()");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Go Back';
	opt3.setAttribute("onclick", "javascript:level3()");

	document.getElementById('level_title').innerHTML = 'Wasteland';
	document.getElementById('level_image').src = 'img/steenplek.jpg';
}

function level11(){						// tournament area // 
	showdb7();
	hidedb5();
	console.log("level11()")
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go to city (North)';
	opt1.setAttribute("onclick", "javascript:level12()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go to city (South)';
	opt2.setAttribute("onclick", "javascript:level6()");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Go back';
	opt3.setAttribute("onclick", "javascript:level5()");

	document.getElementById('level_title').innerHTML = 'Tournament area';
	document.getElementById('level_image').src = 'img/toernooi.jpg';
}

function level12(){						// City North // 
	hidedb7();
	showdb5();
	hidedb6();
	console.log("level12()")
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go to city (East)';
	opt1.setAttribute("onclick", "javascript:level13()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go to city (West)';
	opt2.setAttribute("onclick", "javascript:level15()");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Go to Tournament Area';
	opt3.setAttribute("onclick", "javascript:level11()");

	document.getElementById('level_title').innerHTML = 'City North';
	document.getElementById('level_image').src = 'img/stad_noord.jpg';
}

function level13(){						// City East // 
	hidedb5();
	showdb6();
	console.log("level13()")
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go to city (North)';
	opt1.setAttribute("onclick", "javascript:level12()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go to city (south)';
	opt2.setAttribute("onclick", "javascript:level14()");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = '';
	opt3.setAttribute("onclick", "javascript:level()");

	document.getElementById('level_title').innerHTML = 'City East';
	document.getElementById('level_image').src = 'img/stad_east.jpg';
}

function level14(){						// City South // 
	hidedb7();
	hidedb6();
	console.log("level14()")
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go to city (East)';
	opt1.setAttribute("onclick", "javascript:level13()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go to city (West)';
	opt2.setAttribute("onclick", "javascript:level15()");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = '';
	opt3.setAttribute("onclick", "javascript:level()");

	document.getElementById('level_title').innerHTML = 'City South';
	document.getElementById('level_image').src = 'img/stad_zuid.png';
}

function level15(){						// City West // 
	hidedb5();
	console.log("level15()")
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go to city (North)';
	opt1.setAttribute("onclick", "javascript:level12()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go to city (South)';
	opt2.setAttribute("onclick", "javascript:level14()");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = '';
	opt3.setAttribute("onclick", "javascript:level()");

	document.getElementById('level_title').innerHTML = 'City West';
	document.getElementById('level_image').src = 'img/stad_west.png';
}

function level16(){						// School // 
	console.log("level16()")
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go to city (North)';
	opt1.setAttribute("onclick", "javascript:level12()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go to city (East)';
	opt2.setAttribute("onclick", "javascript:level13()");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Go Back';
	opt3.setAttribute("onclick", "javascript:level6()");

	document.getElementById('level_title').innerHTML = 'School';
	document.getElementById('level_image').src = 'img/school.png';
}


function hidegoku() {
    document.getElementById('intro_goku').style.visibility = 'hidden';
}

function showlach() {
	document.getElementById('intro2_goku').style.display = "block";
}

function hidelach() {
	document.getElementById('intro2_goku').style.display = 'none';
}

function showtext() {
	document.getElementById('intro_text').style.display = "block";
}

function hidetext() {
	document.getElementById('intro_text').style.display = "none";
}

function showdb1() {
	document.getElementById('db1').style.display = "block";
}

function hidedb1() {
	document.getElementById('db1').style.display = "none";
}

function showdb2() {
	document.getElementById('db2').style.display = "block";
}

function hidedb2() {
	document.getElementById('db2').style.display = "none";
}

function showdb3() {
	document.getElementById('db3').style.display = "block";
}

function hidedb3() {
	document.getElementById('db3').style.display = "none";
}

function showdb4() {
	document.getElementById('db4').style.display = "block";
}

function hidedb4() {
	document.getElementById('db4').style.display = "none";
}

function showdb5() {
	document.getElementById('db5').style.display = "block";
}

function hidedb5() {
	document.getElementById('db5').style.display = "none";
}

function showdb6() {
	document.getElementById('db6').style.display = "block";
}

function hidedb6() {
	document.getElementById('db6').style.display = "none";
}

function  showdb7() {
	document.getElementById('db7').style.display = "block";
}

function hidedb7() {
	document.getElementById('db7').style.display = "none";
}

function showroshi() {
	document.getElementById('master_roshi').style.display = "block";
}

function hideroshi() {
	document.getElementById('master_roshi').style.display = "none";
}