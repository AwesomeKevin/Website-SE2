//<script>
function OnReady() {
  console.log("Pagina geladen, DOM klaar voor gebruik.");
  //$('#naam').focus(Focus); 
  //$('#naam').blur(Blur); 
  $("#knop").click(OnSubmit);
  $("#verwijderhondknop").click(OnVerwijderHonden);
  $("#verwijderkatknop").click(OnVerwijderKatten);
	
	// alle katten inladen
	var cat_list = JSON.parse(localStorage.getItem("cats"));
	
	if(Array.isArray(cat_list))
	{
		for(var i = 0; i < cat_list.length; ++i)
		{
			var cat = cat_list[i];
			$("#Kattabel").append("<tr><td>" + cat.naam + "</td><td>" + cat.leeftijd + "</td><td>" + cat.registratienummer + "</td><td>" + "nee" + "</td></tr>");
		}
	}
	
	// alle honden inladen
	var dog_list = JSON.parse(localStorage.getItem("dogs"));
	
	if(Array.isArray(dog_list))
	{
		for(var i = 0; i < dog_list.length; ++i)
		{
			var dog = dog_list[i];
			$("#Hondtabel").append("<tr><td>" + dog.naam + "</td><td>" + dog.leeftijd + "</td><td>" + dog.registratienummer + "</td><td>" + "nee" + "</td></tr>");
		}
	}
}
$(document).ready(OnReady);

function Focus() {
	document.getElementById("hidden").style.display = 'inline';
}

function OnSubmit(event) {

  var animal = {
  "soort":  $("input[name=soort]:checked").val(),
  "naam":     $("#naam").val(),
  "leeftijd":      $("#leeftijd").val(),
  "registratienummer":    $("#registratienummer").val()
};

var check = 1;
if(animal.naam.length == 0)
{
	event.preventDefault();
	// als er niet aan de lengte voldaan wordt komt er helptekst
	document.getElementById("hidden").style.display = 'inline';
	console.log("vul een naam in");
	var check = 0;
}

if(animal.leeftijd.length > 0)
{
	if(animal.leeftijd < 0)
	{
		// dit filtert geen letters etc.
		event.preventDefault();
		console.log("vul een juiste leeftijd in");
		var check = 0;
	}
}

if(animal.registratienummer.length > 0)
{
	if(animal.registratienummer.substring(0,1) != 0)
	{
		event.preventDefault();
		console.log("eerste getal moet een 0 zijn");
		document.getElementById("regnr").style.display = 'inline';
		var check = 0;
	}
	if(animal.registratienummer.length != 5)
	{
		event.preventDefault();
		console.log("registratienummer is te klein");
		document.getElementById("regnr").style.display = 'inline';
		var check = 0;
	}
}


// alleen als alles goed is gegaan dan toevoegen aan de list
if(check == 1)
{
	
	if(animal.soort == "kat")
{
	// list voor katten
	var cat_list = JSON.parse(localStorage.getItem("cats"));
	if(!Array.isArray(cat_list)) {
	cat_list = [];
	}
	cat_list.push(animal);

	localStorage.setItem("cats", JSON.stringify(cat_list));
}


if(animal.soort == "hond")
{
	// list voor honden
	var dog_list = JSON.parse(localStorage.getItem("dogs"));
	if(!Array.isArray(dog_list)) {
	dog_list = [];
	}
	dog_list.push(animal);

	localStorage.setItem("dogs", JSON.stringify(dog_list));
}
}
}

function OnVerwijderHonden(event)
{
	localStorage.removeItem("dogs");
	location.reload();
}

function OnVerwijderKatten(event)
{
	localStorage.removeItem("cats");
	location.reload();
}

/*
function Blur() {
	document.getElementById("hidden").style.display = 'none';
}
*/



// function focusFunction() {
    // // Focus = Changes the background color of input to yellow
    // document.getElementById("hidden").style.display = 'inline';
// }

// function blurFunction() {
    // // No focus = Changes the background color of input to red
    // document.getElementById("hidden").style.display = 'none';
// }
//</script>


// var animal = {
  // "soort":  $("input[name=soort]:checked").val(),
  // "naam":     $("#naam").val(),
  // "leeftijd":      $("#leeftijd").val(),
  // "registratienummer":    $("#registratienummer").val()
// };

// var animal = [$("input[name=soort]:checked").val(), $("#naam").val(), $("#leeftijd").val(), $("#registratienummer").val()];