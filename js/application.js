$(document).ready(function() {
	var count = 5;
	var randomNum = Math.round(Math.random() * 100);

	$("#go-button").on("click", function() {
	
		var userInput = $("#form-input").val();
		var para1 = $(".para1").last("p");	

		$(".para1").find(".nodeMarker").remove();

		count--;

		$("#countdown").text(count);

		if (userInput == randomNum) {
			para1.append("<p class=\"nodeMarker\">You've guessed the right number! You win!</p>");
			$(".guess").append("<li class =\"superclose\">" + userInput + "</li>");
			$("#go-button").hide();
			$("#form-input").hide();
			$("#hint-button").hide();
		 } else if ((userInput <= randomNum + 5 && userInput >= randomNum - 5) && userInput > randomNum) {
			para1.append("<p class=\"nodeMarker\">You're getting super hot! Guess lower!</p>");
			$(".guess").append("<li class = \"superclose\">" + userInput + "</li>");
		} else if ((userInput <= randomNum + 5 && userInput >= randomNum - 5) && userInput < randomNum) {
				para1.append("<p class=\"nodeMarker\">You're getting super hot! Guess higher!</p>");
			$(".guess").append("<li class = \"superclose\">" + userInput + "</li>");
		} else if ((userInput <= randomNum + 10 && userInput >= randomNum - 10) && userInput > randomNum) {
			para1.append("<p class=\"nodeMarker\">You're getting close! Guess lower!</p>");
			$(".guess").append("<li class = \"close\">" + userInput + "</li>");
		} else if ((userInput <= randomNum + 10 && userInput >= randomNum - 10) && userInput < randomNum) {
			para1.append("<p class=\"nodeMarker\">You're getting close! Guess higher!</p>");
			$(".guess").append("<li class=\"close\">" + userInput + "</li>");
		} else if ((userInput <= randomNum + 20 && userInput >= randomNum - 20) && userInput > randomNum) {
			para1.append("<p class=\"nodeMarker\">You're quite far off. Guess lower.</p>");
			$(".guess").append("<li class=\"cold\">" + userInput + "</li>");
		} else if ((userInput <= randomNum + 20 && userInput >= randomNum - 20) && userInput > randomNum) {
			para1.append("<p class=\"nodeMarker\">You're quite far off. Guess higher.</p>");
			$(".guess").append("<li class=\"cold\">" + userInput + "</li>");
		} else {
			if (count == 0) {
				$(".guess").append("<li class=\"icecold\">" + userInput + "</li>");
				$(".para1").find(".nodeMarker").remove();
				para1.append("<p class=\"nodeMarker\">You've run out of chances. You lose!</p>");
				$("#go-button").hide();
				$("#form-input").hide();
				$(".hint").hide();
			} else {
			para1.append("<p class=\"nodeMarker\">You're no where near the right answer. Guess another number.</p>");
			$(".guess").append("<li class=\"icecold\">" + userInput + "</li>");
			}
		};

		$("#form-input").val("");
	});

	$("#hint-button").on("click", function() {
		var para1 = $(".para1").last("p");	
		$(".para1").find(".nodeMarker").remove();
		para1.append("<p class=\"nodeMarker\">The number lies between " + (randomNum - 5) + " and " + (randomNum + 5) + ".</p>");
	});

	$("#tryagain-button").on("click", function() {
		count=5;
		$("#countdown").text(count);
		randomNum = Math.round(Math.random() * 100);
		$(".para1").find(".nodeMarker").remove();
		$(".para1").find(".nodeMarker").remove();
		$(".guess").first().children().remove();
		$("#go-button").show();
		$("#form-input").show();
		$("#hint-button").show();
	});

});

