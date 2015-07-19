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
			
			//Print name of chat if it's a group
			var color = (chat_colors[msg.chat.id] ? chat_colors[msg.chat.id] : (chat_colors[msg.chat.id] = various_colors[Math.floor(Math.random() * various_colors.length)]));
			if (msg.chat.id < 0 && last_chat != msg.chat.id) console.log(colors[color](msg.chat.title));

			//Print name of sender and align depending of if it is a group
			var color = (chat_colors[msg.from.id] ? chat_colors[msg.from.id] : (chat_colors[msg.from.id] = various_colors[Math.floor(Math.random() * various_colors.length)]));
			console.log( (msg.chat.id > 0 ? '' : '     ') + colors[color](msg.from.username + ': ') + msg.text.trunc(50));

			last_chat = msg.chat.id;

    };

};

String.prototype.trunc = function(n){
	return this.substr(0,n-1)+(this.length>n ? '...' : '');
};

module.exports = count;
