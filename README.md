restmock
======

It can create a quick REST server by specifying routes in a <b>json</b> configuration file, additionally supporting static path.

* <b>/_create</b> is a magic route to create route on-fly with query parameters like <code>/_create?path=/a&response={a:1}&type=get</code>  

Run
---
<code>restmock [configure file]</code> : default mock.json


Configuration
-------------
It supports all express method, with more specifically following route type
* get
* post
* patch
* put
* delete
* <b>static</b> : create a static folder with <i>response</i> as target folder

Example
------
<pre>
{
    "port":9080,
    "routes":[
        {
            "path":"/test",
            "type":"get",
            "response":{
                "_id":"13",
                "name":"jack",
                "foo":"bar"
            }
        },
        {
            "path":"/a",
            "type":"post",
            "response":{
                "_id":"23",
                "name":"jack"
            }
        },
        {
            "path":"/static",
            "type":"static",
            "response":"www"
        }
    ]
}
</pre>
