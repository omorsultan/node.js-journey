// ------------------- Basic async ------ //
/*

async function getData(){
  console.log('starting');
  const result = await anotherFunction();
  console.log(`result = ${result}`);
  console.log('is it run first ?');
  return result;  
}

function anotherFunction(){

  return new Promise ( (resolve) =>{
    setTimeout(()=>  resolve('operation completed'),1000);
  });
}

getData().then(data => console.log('Final data',data));
*/

//----------------async await in simple--------- //
/*
// create a promise

// A function that returns a Promise
function fetchData() {

  // Create a new Promise
  return new Promise((resolve, reject) => {

    // Wait 2 seconds (asynchronous operation)
    setTimeout(() => {

      // Promise is completed successfully
      resolve("Data received");

      // If something went wrong, we could use:
      // reject("Something went wrong");

    }, 2000);

  });

}

// use async / await 

// 'async' means this function always returns a Promise
async function run() {

  console.log("1. Before fetch");

  // Call fetchData()
  // fetchData() returns a Promise

  // 'await' pauses ONLY this async function
  // until the Promise is resolved
  const data = await fetchData();

  // After Promise is resolved,
  // 'data' becomes "Data received"
  console.log("2.", data);

  console.log("3. After fetch");
}

// Start the function
run();

console.log("4. Main program continues");

*/



