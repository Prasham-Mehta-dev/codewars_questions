/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"
*/

function solution(string) {
  let j = 0;
  let word = string.split("")
  for(let i=0; i< string.length; i++){
    if( string[i] == string[i].toUpperCase()){
      word.splice(i+j,0, " ");
      j++;
    }
  }
  return word.join("");
}