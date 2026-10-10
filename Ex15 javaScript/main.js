// For in loop with an array of objects
let people = [
    {
        name: "Alice", age: 25, city: "Wonderland"
    },
    {
        name: "Bob", age: 30, city: "Builderland"
    },
    {
        name: "Charlie", age: 35, city: "Chocolate Factory"
    },
    console.log("Here are properties and values of each person.")
]

for(let i in people){
    // console.log("..................................")
    console.log("name: " + people[i].name);
    console.log("age: " + people[i].age);
    console.log("city: " + people[i].city);
}

