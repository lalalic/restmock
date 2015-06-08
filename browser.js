var XMLHttpRequest=window.XMLHttpRequest=require('fakexmlhttprequest')
var conf=require('./mock.json'), //which will be replaced with mock.json in target project
    routes=conf.routes;

var _send=XMLHttpRequest.prototype.send
XMLHttpRequest.prototype.send=function(){
    _send.apply(this,arguments)
    var pathname=(new URL(this.url)).pathname
    for(var i=0, len=routes.length, t; i<len; i++){
        t=routes[i]
        if(t.path==pathname && t.type.toUpperCase()==this.method){
            var response=t.response,
                type=(typeof(reponse)=='string' ? 'text/plain' :'application/json');

            this.respond(200, {"Content-Type": type}, JSON.stringify(response));
            return
        }
    }
    this.respond(404, {"Content-Type":'text/plain'}, "not found")
}
