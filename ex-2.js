//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let count = 0;
  for (const i in array) {
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

let resultRoom1;
let resultRoom2;
let resultRoom3;

atLeastFive(studentScoresRoom1, function (operation) {
  if (operation >= 5) {
    resultRoom1 = "นักเรียนห้องที่ 1 ผ่านเกณฑ์ ✅";
  } else {
    resultRoom1 = "นักเรียนห้องที่ 1 ไม่ผ่านเกณฑ์ ❌";
  }
});

atLeastFive(studentScoresRoom2, function (operation) {
  if (operation >= 5) {
    resultRoom2 = "นักเรียนห้องที่ 2 ผ่านเกณฑ์ ✅";
  } else {
    resultRoom2 = "นักเรียนห้องที่ 2 ไม่ผ่านเกณฑ์ ❌";
  }
});

atLeastFive(studentScoresRoom3, function (operation) {
  if (operation >= 5) {
    resultRoom3 = "นักเรียนห้องที่ 3 ผ่านเกณฑ์ ✅";
  } else {
    resultRoom3 = "นักเรียนห้องที่ 3 ไม่ผ่านเกณฑ์ ❌";
  }
});

let scoreRoom1Result = resultRoom1;
let scoreRoom2Result = resultRoom2;
let scoreRoom3Result = resultRoom3;

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
