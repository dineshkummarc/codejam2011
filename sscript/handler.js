var hQ = [];
var active = true;

function _push(woot) {
    
}
    
function _exec() {

}

module.export = {
    send: function (a,b,c,d,e,f) {
        var cookie = 'something=anything'
        
        var address = obj.address;
        var port = obj.address;
        var brower = obj.address;
        
        // + %2B
        var data = "MessageType=" + a + "&OrderReferenceIdentifier=" + b + "&ExecuatedShares=" + c + "&ExecutionPrice=" + d + "&MatchNumber=" + e + "&To=" + f;

        var client = http.createClient(80, 'localhost');

        var headers = {
            'Host': 'www.example.com',
            'Cookie': cookie,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': data.length
        };

        var request = client.request('POST', '/broker/endpoint', headers);
        
        var res_data;

        request.on('response', function(response) {
          response.on('data', function(chunk) {
            res_data += chunk;
          });
          response.on('end', function() {
            // res_data is our response from broker, but dont need to do anything
          });
        });
        request.write(data);
        request.end();
    }
};
