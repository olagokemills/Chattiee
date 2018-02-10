var username = "";

	function send_message(message){

		var prevState = $("#container").html();


		if(prevState.length > 3){
			prevState = prevState + "<br>";
		}

  $("#container").html
  (prevState +"<span class='currrent_message'>" + 
  	"<span class='bot'>chatbot: </span>"+ message + "</span>");
  $(".currrent_message").hide();
  $(".currrent_message").delay(500).fadeIn();
  $(".currrent_message").removeClass("currrent_message");





	}

	function get_username(){
		send_message("Hello I am chatty, what is your name")
	}

	function ai(message){

		if(username.length < 3){
			username = message;
			send_message("Nice  to meet you"+ username + ", how are you?");
		}

		if(message.indexOf("how are you")>= 0){

			send_message("Thanks, I am good!");
		} 
		else if(message.indexOf("how about you")){

			send_message("Very fine");
		}


		if(message.indexOf("time")>= 0){

			var date = new Date();
			var h = date.getHours();
			var m = date.getMinutes();

			send_message("Current times is:"+ h + ":"+ m);
		}
		if(message.indexOf("where are you")>= 0){

			send_message("I'm always here, trust me");


		}

		if(message.indexOf("tell me a joke")>= 0){


		}


	}


$(function(){


get_username();

	$("#textbox").keypress(function(event){

		

		if( event.which == 13){

			if($("#enter").prop("checked")){


				$("#send").click();
				event.preventDefault();

			}
		}
	});

	$("#send").click(function(){


		var username ="<span class='username'>You:  </span>";

		var newMessage = $("#textbox").val();

		$("#textbox").val(" ");


		var prevState = $("#container").html();

		if(prevState.length > 3){
			prevState = prevState + "<br>";
		}


		$("#container").html(prevState + username + newMessage);
		$("#container").scrollTop($("#container").prop("scrollHeight"));

		ai(newMessage);

	});
}); 