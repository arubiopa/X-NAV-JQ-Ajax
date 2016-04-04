
$(document).ready(function() {
    $.ajax({
    	type: "GET",
    	url: "doc.txt",
    	cache: false
    }).done(function( text ) {
  	   $("#second").html(text);
    });
    $("#second").click(function(){
	    $.ajax({
  	    type: "GET",
  	    url: "doc2.txt",
  	    cache: false
    	}).done(function( text ) {
    	    $("#third").html(text);
    	});
    });
});
