var request = require('request');
var fs = require('fs');

request.get('https://api.github.com/repos/jquery/jquery/contributors')

       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
       })
       .on('data', function(data){
       	console.log(data);
       })
       