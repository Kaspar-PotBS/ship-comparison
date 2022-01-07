

$(document).ready(function () {
		
var hashParams = window.location.hash.substr(1).split('&'); // substr(1) to remove the `#`
for(var i = 0; i < hashParams.length; i++){
    var p = hashParams[i].split('=');
	console.log("hash val " + p[1]);
    document.getElementById(p[0]).value = decodeURIComponent(p[1]);;
	
	StatsLookupA(p[1]);
	$('#ship').on('change', function(){

    });
	$('#ship').change();
	
	
	
};
});



//$(function(){
//  $('#ship').change(function () {
//       var selnum = $(this).val();
//		var url = "ship="+selnum;
//        window.location.hash = url;
//    });
//});
//window.addEventListener('hashchange', fn, false);
//
//window.onload = fn; // fire on pageload
//
//function fn() {
//   $('#ship1').val(window.location.hash.replace('#', ''));
//	
//}
