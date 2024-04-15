/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    return new Promise(function(resolve) {
        setTimeout(resolve, n * 1000);
    }); 


}

wait(1).then(function() {
    console.log('Print after 1 second');
})

wait(2).then(function() {
    console.log("prints after 2 seconds");
})
