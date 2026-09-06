//Add a method start to the car object that logs "The car has started" to the console and call this method.

let car = {
    Make: "Honda",
    Model: "Civic",
    Year: 2020,
    start : function(){
        console.log("The car has started")
    }
};

car.start();