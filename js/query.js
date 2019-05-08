$(document).ready(function(){
    	console.log("Ready!");
	});

	$("#circle").mouseenter(function(){
		$(".sidebar").animate({
			left: "+300px"
		}, 500,
		)
	})

	$(".sidebar").mouseleave(function(){
		$(this).animate({
			left: "-300px"
		}, 500,
		)
	})

// this works in javascript not in query file
	// if(gameOver){
	// 	$("#replay").show();
	// }

	// else{
	// 	$("#replay").hide();
	// }

//  ^^^^^^^^^^^^

	// $("#controls").mouseenter(function(){
	// 	$(this).animate({
	// 		left: "+300px"
	// 	}, 500,
	// 	)
	// })

	// $("#controls").mouseenter(function(){
	// 	$(this).animate({
	// 		top: "+250px"
	// 	}, 500,
	// 	)
	// })


	// $("#controls").mouseleave(function(){
	// 	$(this).animate({
	// 		top: "-250px"
	// 	}, 500,
	// 	)
	// })