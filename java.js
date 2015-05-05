//<script>
function OnReady() {
  console.log("Pagina geladen, DOM klaar voor gebruik.");
  //$('#naam').focus(Focus); 
  //$('#naam').blur(Blur); 
  $("#knop").click(OnSubmit);
  if(localStorage.getItem("knaam") != null)
  {
    alert(localStorage.getItem("ksoort") + '\n' + localStorage.getItem("knaam") + '\n' + localStorage.getItem("kleeftijd") + '\n' + localStorage.getItem("kregistratienummer") + '\n' + localStorage.getItem("kgereserveerd"));
  }
  if(localStorage.getItem("hnaam") != null)
  {
    alert(localStorage.getItem("hsoort") + '\n' + localStorage.getItem("hnaam") + '\n' + localStorage.getItem("hleeftijd") + '\n' + localStorage.getItem("hregistratienummer") + '\n' + localStorage.getItem("hgereserveerd"));
  }
	//\n localStorage.getItem("kleeftijd")\n localStorage.getItem("kregistratienummer")/n localStorage.getItem("kgereserveerd")
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

// als alles goed is gegaan
if(check == 1)
{	
	if(animal.soort == "hond")
	{
		localStorage.setItem("hsoort", JSON.stringify(animal.soort));
		localStorage.setItem("hnaam", JSON.stringify(animal.naam));
		localStorage.setItem("hleeftijd", JSON.stringify(animal.leeftijd));
		localStorage.setItem("hregistratienummer", JSON.stringify(animal.registratienummer));
		localStorage.setItem("hgereserveerd", "Niet Gereserveerd");	
	}
	if(animal.soort == "kat")
	{		
		localStorage.setItem("ksoort", JSON.stringify(animal.soort));
		localStorage.setItem("knaam", JSON.stringify(animal.naam));
		localStorage.setItem("kleeftijd", JSON.stringify(animal.leeftijd));
		localStorage.setItem("kregistratienummer", JSON.stringify(animal.registratienummer));
		localStorage.setItem("kgereserveerd", "Niet Gereserveerd");	
	}

}



}



function Blur() {
	document.getElementById("hidden").style.display = 'none';
}



// function focusFunction() {
    // // Focus = Changes the background color of input to yellow
    // document.getElementById("hidden").style.display = 'inline';
// }

// function blurFunction() {
    // // No focus = Changes the background color of input to red
    // document.getElementById("hidden").style.display = 'none';
// }
//</script>