// Task: Create a function that returns a Promise, which resolves after a 2-second delay with a success message. Handle the Promise using .then() to log the success message, and add a .catch() block to handle any potential errors.

function fetchUserData() {
    return new Promise ((resolve, reject) => {
        console.log('After 2second we find setTimeout result')
        setTimeout(() =>{
            const success = true;
            if(success) {
                resolve({id:10, name:'Shafie'})
            } else {
                reject('Failed to fetch user data')
            }
        }, 2000);
    })
}

fetchUserData()
 .then(data => console.log("User Data:", data))
 .catch(error => console.error("Error:", error));
