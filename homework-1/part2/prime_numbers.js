#!/usr/bin/env node

/* *******************************************
 *
 * Find out the first N prime numbers.
 *
 * **********************************************************************************/
var fs = require('fs');
var outfile = "prime_numbers.txt";
var primeArray = new Array();

var LIMIT = process.argv[2] || 100;  //DEFAUL is 100 is no argument is supplied

function isPrime(n) {
	if (n < 2) return false;
	for (var j = 2; j < n; j++) {
		if (n % j == 0) {
			return false;
		}
	}
	return true;
}

for (var idx=2; idx < 99999; idx++) {
	if (isPrime(idx)) {
		primeArray.push(idx);
	}			
	if (primeArray.length == LIMIT) {
		break;
	}
}
console.log("Output written to " + outfile);
fs.writeFileSync(outfile, primeArray + "\n");
