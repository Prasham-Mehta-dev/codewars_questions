/* 
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

Examples:
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
*/

function iqTest(numbers){
  let arr = numbers.split(" ")
  let oddCount = [];
  let evenCount = [];
  arr.forEach((x,i) => {
    if (x % 2 === 0){
      evenCount.push(i+1);
    }else oddCount.push(i+1);
  })
  return evenCount.length === 1 ? evenCount[0] : oddCount[0];
}