// Async/Await: Synchronous-Like Asynchronous Code

// **Definition:** `async` and `await` provide a cleaner way to handle Promises, making asynchronous code look and behave more like synchronous code.



function fetchUserData() {
    return new Promise((resolve, reject) => {
        console.log('This is Async/Await Code: Synchronous-Like Asynchronous Code')
        setTimeout(() => {
            const success = true; 
            if (success) {
                resolve({ id: 1, name: "John Doe" });
            } else {
                reject("Failed to fetch user data");
            }
        }, 2000);
    });
}

async function displayUserData() {
    try {

        const user = await fetchUserData()
        console.log('User Data:', user)

    } catch(error) {
        console.log('Error:', error);
    }
}

displayUserData()


