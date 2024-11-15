// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function processCheckout(checkoutTimes) {
  const result = [];

  let currentTime = 0;

  let totalTime = 0;

  for (let i = 0; i < checkoutTimes.length; i++) {
    const serviceTime = checkoutTimes[i];

    const customerData = {
      customer: i + 1,
      startTime: currentTime,
      serviceTime: serviceTime,
    };

    result.push(customerData);
    currentTime += serviceTime;
    totalTime += serviceTime;
  }

  console.log('Checkout Process:', result);

  console.log('Total time to serve all customers:', totalTime);

  return result;
}

const checkoutTimes = [2, 5, 1, 3];
processCheckout(checkoutTimes);
