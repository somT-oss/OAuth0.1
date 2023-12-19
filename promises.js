
function someAsyncFunction() {
    return new Promise((resolve, reject) => {
        // simulating wait period
        setTimeout(() => {
            const success = true;
            
            if (success) {
                const data = 'data successfully received';
                resolve(data) // resolve promise with the data
            } else {
                reject(new Error('Failed to fetch data')); // handle the error thrown from the promise
            }
        }, 2000); // simulating a 2s delay.
    })
}

someAsyncFunction()
.then(result => {
    console.log(result); 
})
.catch(error => {
    console.log(error);
})

//async function example() {
//    
//    try {
//        const result = await someAsyncFunction();
//        console.log(result);
//    } catch (error) {
//        console.log(error);
//    }
//    
//}

//example()