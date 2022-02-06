$(document).ready(function () {
		
var hashParams = window.location.hash.substr(1).split('&'); // substr(1) to remove the `#`
for(var i = 0; i < hashParams.length; i++){
    var p = hashParams[i].split('=');
    document.getElementById(p[0]).value = decodeURIComponent(p[1]);;
	
	$('#ship').on('change', function(){

    });
	$('#shipb').on('change', function(){

    });
	
	$('#ship').change();
	$('#ship').on('change', StatsLookupA());
	$('#shipb').change();
	$('#shipb').on('change', StatsLookupB());
		
};
});




$(function(){
  $('#ship').change(function () {
       var selnum1 = document.getElementById("ship").value;
	   var selnum2 = document.getElementById("shipb").value;
		var url = "ship="+selnum1+"&shipb="+selnum2;
        window.location.hash = url;
	});
});

$(function(){
  $('#shipb').change(function () {
       var selnum1 = document.getElementById("ship").value;
	   var selnum2 = document.getElementById("shipb").value;
		var url = "ship="+selnum1+"&shipb="+selnum2;
        window.location.hash = url;
	});
});


window.addEventListener('hashchange', fn, false);

window.onload = fn; // fire on pageload

function fn() {
   $('#ship1').val(window.location.hash.replace('#', ''));
   $('#ship2').val(window.location.hash.replace('#', ''));
	
}

