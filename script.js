const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let result = [];
  let current = [];
  let currentSum = 0;

  for (let num of arr) {
    if (currentSum + num <= n) {
      current.push(num);
      currentSum += num;
    } else {
      result.push(current);        // ✅ store current subarray
      current = [num];             // ✅ start new subarray with current number
      currentSum = num;
    }
  }

  if (current.length > 0) {
    result.push(current);
  }

  return result;
};

const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));

// 🔎 Console Test Examples:
console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5)); // [[1, 2], [3], [4, 1, 0], [2, 2]]
console.log(divide([4, 3, 2, 1], 4));            // [[4], [3], [2, 1]]
