restmock
-------
Mock REST response on **Server** or **Browser**.

Server Mock
----
It can create a quick REST server by specifying routes in a <b>json</b> configuration file, additionally supporting static path.

* <b>/_create</b> is a magic route to create route on-fly with query parameters like <code>/_create?path=/a&response={a:1}&type=get</code>
<code>restmock [configure file]</code> : default mock.json

Browser Mock
-------
It replaces window.XMLHttpRequest, and load mock.json in target project as configuration.

* only support **browserify** bundling
* steps
    * $ npm install restmock
    * write mock.json in root of target project
    * add <code>require('restmock')</code> to project main file
    * **you have to remove <code>require('restmock')</code> in production environment.**



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
