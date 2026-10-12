//  Implement a simple blocking function that simulates a delay of 2 seconds before returning a message. Then, implement a non-blocking version of the same function using setTimeout

function getUserData(){
    console.log('Welcome to my console');
    setTimeout(()=>{
        console.log('This is my first setTimeout code')
    },2000)
};
getUserData();