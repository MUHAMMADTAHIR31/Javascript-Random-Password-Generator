$(document).ready(function(){

		var data = [];
		
		$("#generate").click(function(){
		
			var no_of_pass =  $("#no_of_pass").val();
			var length_of_pass =  $("#length_of_pass").val();
			
			
			$("#temp-table").fadeIn();
			
			
			for(var j=1; j <= no_of_pass; j++ ){
				randomPassword(length_of_pass);
			}
		
			//Traversing
			for(var arr=0; arr < data.length; arr++ ){
				$("#dataTable").append("<tr><td>" + parseInt(arr + 1) + "</td><td>" + data[arr] + "</td></tr>");
			}
			

		});
		
		function randomPassword(length) {
			var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
			var pass = "";
			for (var x = 0; x < length; x++) {
				var i = Math.floor(Math.random() * chars.length);
				pass += chars.charAt(i);
			}
			data.push(pass);
		}
		
		$("#clear").click(function(){
		
			$("#no_of_pass").val("");
			$("#length_of_pass").val("");
			$("#dataTable").empty();
			$("#temp-table").fadeOut();
			data = [];
			
		});
		
			
				

});//End of document function