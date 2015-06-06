var through=require('through')

module.exports=function(file){
    var name=file.split(/[\/\\]/).pop()
    if(name!=='mock.json')
        return through()

    return through(function(){}, function(){
        this.queue(require('fs').readFileSync('mock.json'))
        this.queue(null)
    });
}
