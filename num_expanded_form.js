// You will be given a number and you will need to return it as a string in Expanded Form. For example:

/* expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
*/

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");


// solution 2

function expandedForm(num) {
  let arr = (' '+num).split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
    newArr.push(`${arr[i] * (10 ** (arr.length-i-1))}`)
  }
  }
  return newArr.join(" + ")
}