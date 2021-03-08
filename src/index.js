var express = require('express')

const app = express()
const app1 = express()

app.get('/', (req, res) => {
    res.write('Hello from this server running in port 300')
})

app.listen(300, () => {
    console.log('my server is running')
})

app1.listen(8080, ()=> {
    console.log('this issss')
})


