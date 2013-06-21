#!/usr/bin/env node

var fs = require("fs");
var outfile = "hello.txt";
var message = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(outfile,message);
console.log("This script ("+ __filename + ") wrote something to " + outfile + ".Go on, check it out!");

