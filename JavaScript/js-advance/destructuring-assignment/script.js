// Promises

const fetchData = new Promises ((resolve, rejected) => {
    return setTimeout(() => {
        resolve('Data fetched')
    }, 2000)
})

fetchData.then(data => {
    console.log(data)
})
.catch(error => {
    console.log(error)
})