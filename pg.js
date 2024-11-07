var generator = require('generate-password');
var password= generator.generate({
    length:5,
    uppercase:true,
    lowercase:true
});
console.log(password);