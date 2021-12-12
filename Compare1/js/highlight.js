jQuery(function($) {
	$(".filter").click(function() {
	
var master = [];

// Identify the master values.

$('.selected ul' ).first().find('li').each(function(index,value) {
    master.push($(this).text());
});


$('ul:not(:first)').each(function(ulIndex) {
    $(this).find('li').each(function(index) {
        if(master[index] == Number($(this).text())) {
            $(this).addClass('comparematch');        
        }  
	
    });
	
});


$('ul:not(:first)').each(function(ulIndex) {
    $(this).find('li').each(function(index) {
        if(master[index] > Number($(this).text())) {
			$(this).addClass('compareworse');			
        } 		
    });
	
});


$('ul:not(:first)').each(function(ulIndex) {
    $(this).find('li').each(function(index) {
        if(master[index] < Number($(this).text())) {
			$(this).addClass('comparebetter');			
        } 	
    });
});


});
	




	$(".reset").click(function() {
	
var master = [];

// Identify the master values.

$('.selected ul' ).first().find('li').each(function(index,value) {
    master.push($(this).text());
});

$('ul:not(:first)').each(function(ulIndex) {
    $(this).find('li').each(function(index) {
            $(this).removeClass('comparebetter');
			$(this).removeClass('compareworse');
			$(this).removeClass('comparematch');
    });
});
});

});