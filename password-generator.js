var generator = require('generate-password');




var passwords = generator.generateMultiple(10, {
	length: 10,
	uppercase: true,
    symbols: true,
    numbers:true,

});

console.log(passwords);