
var subject_marks = [10, 15, 19, 20, 21];

var total_sum = subject_marks.reduce((a, b) => a + b, 0);
var average = total_sum / subject_marks.length;

console.log("Total Sum of Marks:", total_sum);
console.log("Average of Marks:", average);