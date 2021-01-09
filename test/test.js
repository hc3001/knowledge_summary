const promise1 = new Promise((resolve, reject) => {
	return 1
})
promise1.then((res) => {
	console.log('res', res)
})
