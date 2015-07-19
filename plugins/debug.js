/*
 Debug. Helps understand what messages are received.
 include it into the plugins to be functionnal
*/

var last_chat = "0";
var chat_colors = {};
var various_colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'gray', 'grey'];
var colors = require('colors');

var count = function(){

    this.init = function(){
			 
    };

    this.doStop = function(){

    };


    this.doMessage = function (msg, reply) {
	
			var color = (chat_colors[msg.chat.id] ? chat_colors[msg.chat.id] : (chat_colors[msg.chat.id] = various_colors[Math.floor(Math.random() * various_colors.length)]));
			if (color in colors && typeof colors[color] === "function") {
					if (last_chat != msg.chat.id) console.log(colors[color](msg.chat.title));
			}
			else console.log(msg.chat.title);

			last_chat = msg.chat.id;
			console.log("   " +msg.from.first_name +": "+ msg.text.trunc(20));

    };

};

String.prototype.trunc = function(n){
	return this.substr(0,n-1)+(this.length>n ? '...' : '');
};

module.exports = count;
