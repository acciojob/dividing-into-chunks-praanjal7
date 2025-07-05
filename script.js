const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let result=[];
  let current=[];
	let currentsum=0;
	for(let num of arr){
		if(currentsum+num<=n){
			current.push(num);
			current=[num];
			currentsum=num;
		}
	}
	if(current.length>0){
		result.push(current);
	}
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));

  

// 🔎 Test Examples:
console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5)); // [[1, 2], [3], [4, 1, 0], [2, 2]]
console.log(divide([4, 3, 2, 1], 4));            // [[4], [3], [2, 1]]
