const express=  require('express')
const PORT = 5500

const app = express()

app.get('/',(req, res)=>{
    return res.send('Welcome to Express JS in Docker')
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})