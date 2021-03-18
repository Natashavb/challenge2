	
	/* function voor de datum */

function date(){
		var today = new Date();
		var maanden = new Array('januari', 'febuari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
		var dagenWeek = new Array('zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag');

		document.getElementById('date').innerHTML = dagenWeek[today.getDay()] + ' ' + today.getDate() + " " + maanden[today.getMonth()];
}

	/* function voor tijd */

function marsKlok(){
	var today = new Date();
	var seconds = today.getSeconds();
	var minutes = today.getMinutes();
	var uur = today.getHours();
	var dagDeel = "AM";

	/* voorloop 0 */ 

	if (seconds < 10){
		seconds = '0' + seconds;
	}

	if (minutes < 10){
		minutes = '0' + minutes;
	}

	if (uur < 10){
		uur = '0' + minutes;
	}

	/* Dagdeel veranderen van AM naar PM */ 

	if (uur > 12){
		dagDeel = 'PM';
	}

	document.getElementById('clock').innerHTML = uur + ':' + minutes + ':' + seconds + ' ' + dagDeel;
}

	/* function om de groet tekst & achtergrond kleur te veranderen per dag deel */

function greeting(){
	var today = new Date();
	var uur = today.getHours();
	tekst = document.getElementById('tekst');
	
	if (uur >= 5 && uur <= 10){
		document.getElementById('tekst').innerHTML = 'Goodmorning';
		document.body.style.background = '#FF8533';
	}
	
	if (uur >= 11 && uur <= 20){
		document.getElementById('tekst').innerHTML = 'Have a good day';
		document.body.style.background = '#1ebbd7';
	}

	if (uur >= 21 && uur <= 4){
		document.getElementById('tekst').innerHTML = 'Sleepwell';
		document.body.style.background = '#0e1a40';
	}
}

	/* function om te wisselen tussen de zon en de wolkjes*/

function wissel(){
	var today = new Date();
	var uur = today.getHours();

	if (uur >= 5 && uur <= 20){
		document.getElementById('cloud').style.display = 'none';
		document.getElementById('cloudTwo').style.display = 'none';
	}

		else {
			document.getElementById('sun').style.display = 'none';
		}
}

	date();
	marsKlok();
	greeting();
	wissel();

	setInterval(marsKlok, 1000);