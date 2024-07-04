const express = require ("express")
const dotenv = require("dotenv")
const userRoutes = require("./routes/userRoutes")
const connectDB = require("./config/db")

dotenv.config()
//connect to data base
connectDB() 

//init app
const app = express()
app.use(express.json())
/*
app.get("/api/users", (req, res)=>{
    res.json({message : "Hello world"})
})*/
app.use("/api/users", userRoutes)

//define port
const port = process.env.PORT || 5000 
console.log(port)

app.listen(port, ()=>console.log(`Server is running on port ${port}`))