var express=require('express'),
    fs=require('fs');

module.exports=function (confFile){
    var conf=JSON.parse(fs.readFileSync(confFile));
    var app=express(),
        port=conf.port,
        routes=conf.routes;

    function makeRoute(route){
        if(!(route.path && route.response)){
            console.error("path and response must be specified")
            return
        }

        var type=typeof(route.type)!='undefined' ? route.type.toLowerCase() : 'get';
        switch(type){
        case 'static':
            app.use(route.path, express.static(route.response))
            break
        default:
            app[type](route.path,function(req,res){
                res.json(route.response)
            })
        }
        console.log(`${type} ${route.path}`)
    }

    routes.forEach(makeRoute)

    return app
        .listen(port,function(){
            console.log("server is listening on "+port)
        });
}
