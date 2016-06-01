$(document).ready(function() {
	$(".ryu, .hulk-ryu").mouseenter(function() {
		$(".ryu-still, .hulk-still").hide();
		$(".ryu-ready, .hulk-ryu-ready").show();
	})
	.mouseleave(function() {
		$(".ryu-ready, .hulk-ryu-ready").hide();
		$(".ryu-still, .hulk-ryu-still").show();
	})
	.mousedown(function() {
		playHadouken();//play hadouken sound
		$(".ryu-ready, .hulk-ryu-ready").hide();
		$(".ryu-throwing, .hulk-ryu-throwing").show();
		$(".hadouken").finish().show().animate({
			left: "1020px"
		}, 500, function() {
			$(this).hide();
			$(this).css("left", "615px");
		});
		$(".hulk-hadouken").finish().show().animate({
			right: "1020px"
		}, 500, function() {
			$(this).hide();
			$(this).css("right", "615px");
		});
		
	})
	.mouseup(function() {
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	});

	$(document).keydown(function() {
		if (event.which == 88) {
			$(".ryu-still").hide();
			$(".ryu-ready").hide();
			$(".ryu-cool").show();
		}
		$(this).keyup(function() {
			$(".ryu-cool").hide();
			$(".ryu-still").show();
		});
	});
	
	/** HULK RYU **/
	$(document).keydown(function() {
		if (event.which == 77) {
			$(".hulk-ryu-still").hide();
			$(".hulk-ryu-ready").hide();
			$(".hulk-ryu-cool").show();
		}
		$(this).keyup(function() {
			$(".hulk-ryu-cool").hide();
			$(".hulk-ryu-still").show();
		});
	});

});

function playHadouken () {
	$("#hadouken-sound")[0].volume=0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
}