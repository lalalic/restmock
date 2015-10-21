var XMLHttpRequest=window.XMLHttpRequest=require('fakexmlhttprequest')
var conf=require('./mock.json'), //which will be replaced with mock.json in target project
    routes=conf.routes,
    URL=require('url');

var _send=XMLHttpRequest.prototype.send
XMLHttpRequest.prototype.send=function(){
    _send.apply(this,arguments)
    var pathname=URL.parse(this.url).pathname
    for(var i=0, len=routes.length, t; i<len; i++){
        t=routes[i]
        if(t.path==pathname && t.type.toUpperCase()==this.method.toUpperCase()){
            var response=t.response,
                type=(typeof(reponse)=='string' ? 'text/plain' :'application/json');
            console.log(this)
            this.respond(200, {"Content-Type": type}, JSON.stringify(response));
            return
        }
    }
    console.error(this)
    this.respond(404, {"Content-Type":'text/plain'}, "not found")
}
