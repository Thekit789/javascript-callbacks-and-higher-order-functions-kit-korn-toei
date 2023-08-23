//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let count = 0;
  let result = " ";
  for (let i of array) {
    console.log(i);
    if (i > 70) {
      count++;
    }
  }
  return operation(count);
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, function (operation2) {
  if (operation2 >= 5) {
    return "นักเรียนห้องที่ 1 ผ่านเกณฑ์ ✅";
  } else if (operation2 < 5) {
    return "นักเรียนห้องที่ 1 ไม่ผ่านเกณฑ์ ❌";
  }
});
let scoreRoom2Result = atLeastFive(studentScoresRoom2, function (operation2) {
  if (operation2 >= 5) {
    return "นักเรียนห้องที่ 2 ผ่านเกณฑ์ ✅";
  } else if (operation2 < 5) {
    return "นักเรียนห้องที่ 2 ไม่ผ่านเกณฑ์ ❌";
  }
});
let scoreRoom3Result = atLeastFive(studentScoresRoom3, function (operation2) {
  if (operation2 >= 5) {
    return "นักเรียนห้องที่ 3 ผ่านเกณฑ์ ✅";
  } else if (operation2 < 5) {
    return "นักเรียนห้องที่ 3 ไม่ผ่านเกณฑ์ ❌";
  }
});

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
