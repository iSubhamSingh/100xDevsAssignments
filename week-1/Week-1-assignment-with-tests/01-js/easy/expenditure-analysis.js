/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
 

function calculateTotalSpentByCategory(transactions) {
  let map = new Map();
  for(let i= 0; i < transactions.length; i++){
    let key = transactions[i].category;
    if(map.has(key)){
      map.set(key, map.get(key) + transactions[i].price);
    }else{
      map.set(key, transactions[i].price);
    }
  }
  let ans = [] ;
  
  for(let [key, value] of map){
    ans.push({category: key, totalSpent : value} );
  }
  
  return ans;
}

  
module.exports = calculateTotalSpentByCategory;
