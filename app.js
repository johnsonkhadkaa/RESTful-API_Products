const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./db/connect')

const port = process.env.PORT || 5000

const product_routes = require('./routes/products')


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// middleware or to set router
app.use('/api/products',product_routes)



const start = async () =>{
try{
    await connectDB(process.env.MONGODB_URL)
    app.listen(port, () => {
        console.log(`Server is running at ${port}`)
      })
}catch(error){
     console.log(error)
   }
}
start();

