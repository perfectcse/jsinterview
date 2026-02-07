let promise = new Promise((resolve, reject) => {
  let success = true;
  success ? resolve("Done!") : reject("Error!");
});

async function fetchData() {
  let result = await promise;
  console.log(result);
}

fetchData();
