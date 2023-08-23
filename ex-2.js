//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 70) {
      count++;
    }
  }
  operation(count);
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
let result1 = 0;
atLeastFive(studentScoresRoom1, function (operation) {
  if (operation >= 5) {
    result1 = "นักเรียนห้องที่ 1 ผ่านเกณฑ์ ✅";
  }else {
    result1 = "นักเรียนห้องที่ ไม่ผ่านเกณฑ์ ❌";
  }return result1 
});
console.log(result1)

let result2 = 0;
atLeastFive(studentScoresRoom2, function (operation) {
  if (operation >= 5) {
    result2 = "นักเรียนห้องที่ 2 ผ่านเกณฑ์ ✅";
  }else {
    result2 = "นักเรียนห้องที่ 2 ไม่ผ่านเกณฑ์ ❌";
  }return result2
});
console.log(result2)

let result3 = 0;
atLeastFive(studentScoresRoom3, function (operation) {
  if (operation >= 5) {
    result3 = "นักเรียนห้องที่ 3 ผ่านเกณฑ์ ✅";
  }else {
    result3 = "นักเรียนห้องที่ 3 ไม่ผ่านเกณฑ์ ❌";
  }return result3
});
console.log(result3)


scoreRoom1Result = result1
let scoreRoom2Result = result2
let scoreRoom3Result = result3

console.log(scoreRoom1Result)
console.log(scoreRoom2Result)
console.log(scoreRoom3Result)