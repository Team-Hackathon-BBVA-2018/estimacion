const request = require('request-promise');

for (let x = 1; x < 5074; x++) {
	request('http://localhost:3000/api/pyme/' + x)
	    .then(function (data) {
	    	console.log("ok", x);
	    })
	    .catch(function (err) {
	        console.log("numa", err);
	    });
	setTimeout(function () {
		console.log("Wating...", x);
	}, 5000);
}