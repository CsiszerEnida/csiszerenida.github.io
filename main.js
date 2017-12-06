var color="black"

$(document).ready(function(){
	$("#get-bright").click(function(){
		if(color=="black") {
			$("body").css("background-color", "beige")
			color= "beige"
			$("#get-bright").text("Dark")
		
		} else {
			$("body").css("background-color", "black")
			color="black"
			$("#get-bright").text("Get Bright")
		}
	})
})
