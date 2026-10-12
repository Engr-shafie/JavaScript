// Task:** Write a function that makes a GET request to fetch a list of users from an API using the `fetch` API. Log the response data, and handle any errors that occur.

// **Instructions:**

// 1. Use the `fetch` API to make a GET request to `https://jsonplaceholder.typicode.com/users`.
// 2. Log the list of users to the console.
// 3. Handle any errors by logging them to the console.


async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

fetchUsers()