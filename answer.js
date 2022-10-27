function sumTwoSmallestNumbers(numbers) {  
  return numbers.sort((a,b)=> a-b).slice(0,2).reduce((a,b)=> a+b)
}

function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};
