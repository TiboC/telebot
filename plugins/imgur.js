/*
Get a random image from imgur

!imgur  
*/
var http = require('http');

var imgur = function(){

    this.init = function(){

    };

    this.doStop = function(){

    };


    this.doMessage = function (msg, reply) {
        var re = /!imgur\s*/i;
        var match = re.exec(msg.text);  
        
        if(match)
        {  
            findValidPic(0, reply);
        }
    };

    findValidPic = function(s, reply){
        if(s > 50)
            return null;

        reply({type:"status", status: "upload_photo"});

        generateUrl(5, function(url){
            var options = {method: 'HEAD', host: 'i.imgur.com', port: 80, path: '/' + url + ".png"};
            var req = http.request(options, function(res){
                headers = res.headers;
                
                if(headers["location"])
                {
                    console.log("\tIMGUR: Wrong id " + s);
                    return findValidPic(++s, reply);
                }
                else
                {
                    console.log("\tIMGUR: Valid id " + url);
                    reply({type: 'text', text: "http://i.imgur.com/" + url + ".png"});
                }
            });
            req.end();
        });

        return null;
    };

    generateUrl = function(len, callback){
        var url="";
        len = 5;
        var letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
        for(var i=0;i<len;i++)
        {
            url+=letters[Math.floor(Math.random()*letters.length)];
        }
        callback(url);
    }

};

module.exports = imgur;