var args = require('yargs')
    .usage('Usage: node $0 -x=[num] -y=[num]')
    .demand(['x','y'])
    .argv;

var rect = require('./rectangle');

function solveRect(x, y) {
    console.log("Solving rectangle with " + x + " and " + y + " sides");
    
    rect(x, y, function(error, rectangle) {
        if (error) {
            console.log(error);
        } else {
            console.log("Permieter: " + rectangle.perimeter(x, y));
            console.log("Area: " + rectangle.area(x, y));
        }

    });   
}

solveRect(args.x, args.y);