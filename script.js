function fibonacci(num) {
// your code here
	let fib = [0,1]
	for (let index = 2; index < num; index++) {
		fib[index]= fib[index-1] + fib[index-2];
	}
	// console.log(fib);
	return fib[num-1];
}

module.exports = fibonacci;
