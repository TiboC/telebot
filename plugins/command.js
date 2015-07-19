/*
 command. It interprets a /command and gives back parameters

Example:
You: /command param1 param2 param3
Bot: command: command
		 param1: param1
		 param2: param2
		 param3: param3
*/

var command = function(){

    this.init = function(){

    };

    this.doStop = function(){

    };


    this.doMessage = function (msg, reply) {
				var msg = msg.text.toLowerCase();
				console.log(msg);				
				var text = "";

				var split = msg.split(" ");
				text += "Command: " + split[0] + "\n";

				for(var i = 1; i < split.length; i++){

					text += "param" + i + ": " + split[i] + "\n";

				}
        
				reply({type: 'text', text: text}); 
    };

};

module.exports = command;
