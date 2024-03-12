const exp = require('constants');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, "file.txt")

function callBack(err,data){

    if(err){
        console.log(err);
        return;
    }
    console.log(data);
     
}
 
fs.readFile( filePath, 'utf-8', callBack );

function expensiveOperation(n){
   let product = 1;
   for(let i = 1; i <= n; i++){
    product *= i;
   }
   return product;
}

console.log(expensiveOperation(50));
 