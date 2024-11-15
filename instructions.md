**Title: Supermarket Checkout Service Tracker**

**Objective:**
Write a JavaScript function that simulates a queue at a supermarket checkout and tracks the service time for each customer. The function should calculate the total time taken to serve all customers and display the service start time for each customer.

**Description:**
You are given an array of integers, where each integer represents the time taken to serve a customer. Your task is to write a function that processes these customers in the order they arrive at the checkout, calculates the total time required to serve all customers, and tracks when each customer begins being served.

**Example:**

Input:
```javascript
const checkoutTimes = [2, 5, 1, 3];
console.log("Checkout Process:", processCheckout(checkoutTimes));
```

Expected Output:
```
Checkout Process: [
  { customer: 1, startTime: 0, serviceTime: 2 },
  { customer: 2, startTime: 2, serviceTime: 5 },
  { customer: 3, startTime: 7, serviceTime: 1 },
  { customer: 4, startTime: 8, serviceTime: 3 }
]
Total time to serve all customers: 11
```

Explanation: Each customer is served sequentially. The output shows the start time and service time for each customer.

<details>
<summary>Hints</summary>

1. Define a function `processCheckout(checkoutTimes)` that takes an array of checkout times.
2. Initialize a queue to represent the line of customers at the checkout.
3. Iterate through the array, using `.push` to add each customer's checkout time to the queue.
4. Use `.shift` to serve each customer. Record the start time and service time for each customer.
5. Accumulate the checkout times to calculate the total time.
6. Return both the detailed service times for each customer and the total checkout time.

</details>

**Challenge:**

- Modify the function to handle scenarios where new customers can join the queue at any time.
- Implement functionality to manage multiple checkout counters, distributing customers between counters based on their availability.
