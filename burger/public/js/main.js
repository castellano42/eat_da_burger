$(document).ready(() => {
	$("#submit-btn").click(function(event) {
	   $.ajax('/api/burger', {
	      type: "POST",
	      data: payload
	  }).then((response) => {
	  	location.reload();
	  })
		event.preventDefault();
	});

	$(".devour-it-btn").click(function(event) {
	    var id = $(this).data("id");
	    var payload = {
	    	"devoured": true
	    }

	   $.ajax('/api/burger/' + id, {
	      type: "PUT",
	      data: payload
	  }).then((response) => {
	  	location.reload();
	  })
	})
});