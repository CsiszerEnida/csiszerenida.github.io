var color="black"

$(document).ready(function(){
	$("#get-bright").click(function(){
		if(color=="black") {
			$("body").css("background-color", "white")
			color="white"
		} else {
			$("body").css("background-color", "black")
			color="black"
		}
	})
})