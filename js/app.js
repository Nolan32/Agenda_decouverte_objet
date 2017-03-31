var agenda = [];
var personne = {};
$("#ajout").click(function(){


	personne = {
		"prenom": $('#inp').val(),
		"nom": $('#inpN').val(),
		"age": $('#inpA').val(),
	};


	agenda.push(personne);	

	$('tbody').html('');
	
	for (var i = 0; i < agenda.length; i++) {
		$('tbody').append("<tr><td>" 
							+ i +"</td><td>" 
							+ agenda[i].prenom + "</td><td>"
							+  agenda[i].nom + "</td><td>" 
							+  agenda[i].age + "</td></tr>");	
		//agenda.splice("")
		$('input').val('');
		console.log(agenda);
	};


});


					// local storage

localstorage


var monobjet_json = JSON.stringify(personne);
sessionStorage.setItem("objet",monobjet_json);