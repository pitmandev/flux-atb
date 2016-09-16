	var dispatcher = require('httpdispatcher');
	var http = require('http');
 
    dispatcher.setStatic('resources');
    dispatcher.setStaticDirname('.');
    
    dispatcher.onGet("/page1", function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Page One');
    });	
    
    dispatcher.onPost("/page2", function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Page Two');
    });
    
    dispatcher.beforeFilter(/\//, function(req, res, chain) { //any url 
        console.log("Before filter");
        chain.next(req, res, chain);
    });
    
    dispatcher.afterFilter(/\//, function(req, res) { //any url 
        console.log("After filter");
        chain.next(req, res, chain);
    });
    
    dispatcher.onError(function(req, res) {
        res.writeHead(404);
    });
    
    http.createServer(function (req, res) {
        dispatcher.dispatch(req, res);
    }).listen(1337, '127.0.0.1');
    
    
    /*
    GET /page1 => 'Page One'
    POST /page2 => 'Page Two'
    GET /page3 => 404
    GET /resources/images-that-exists.png => Image resource
    GET /resources/images-that-does-not-exists.png => 404
    */