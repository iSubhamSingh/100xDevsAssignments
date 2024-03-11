let counter = 0;

function increase(){
    counter += 1;
    console.log(counter);
}

setInterval(increase, 1000);