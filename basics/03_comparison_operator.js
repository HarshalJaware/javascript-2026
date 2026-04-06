const age = 8;

console.log(age > 18?"Adult":"Child");

console.log(123 == 123);
console.log(123 === 123);
console.log("123" === 123);

console.log(null === "");
console.log(null === undefined);
console.log(typeof null);
console.log(typeof undefined)


const todos = [
  { id: 1, text: "Build CRUD", done: false, priority: 3 },
  { id: 2, text: "Learn JS", done: true, priority: 1 },
  { id: 3, text: "Test Jest", done: false, priority: 2 }
];

const totalPriority = todos.reduce((sum, todo) => sum + todo.priority, 0);

console.log(totalPriority)