// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  let result = [];
   for (let i=0; i<array.length; i++){
    result = array[i]+ 5000;
    newEmployeeSalaries.push(result)
    console.log(result);
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
forEach(employeeSalaries, forEach)

console.log(newEmployeeSalaries);
