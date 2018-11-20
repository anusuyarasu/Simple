var jwt = require('jsonwebtoken');

var username = "dell"
var password = "123";

var token = jwt.sign(username,password);
console.log(token);

var tokenverify = jwt.verify(token,password);
console.log(tokenverify);


var decode = jwt.decode(token);
console.log(decode);