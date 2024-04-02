/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {

    let start = new Date().getTime();
    let end = start;
    while(end < start + seconds * 1000){
        end = new Date().getTime();
    }
    return 
}

sleep(3);