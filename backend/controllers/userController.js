const User = require("../models/users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// @route POST /api/users
// @desc create new user
// @access public
const registerUser = async(req, res)=>{
    //console.log(req.body)
    //res.json({message : "User created"})
    try {
        //ge data from request body
        const name = typeof(req.body.name) === "string" && req.body.name.trim().length>0 ? req.body.name.trim() : false
        const email = typeof(req.body.email) === "string" && req.body.email.trim().length>0 ? req.body.email.trim() : false
        const password = typeof(req.body.password) === "string" && req.body.password.trim().length>=8 ? req.body.password.trim() : false
        
        // check if data is valid
        if (!name || !email || !password) {
            return res.status(400).json({message : "invalid required fields"})
        }

        // check if user exists
        const userExists = await User.findOne({email})
        if (userExists) {
            return res.status(400).json({message : "user already exists"})
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        console.log(salt)
        const hashedPassword = await bcrypt.hash(password, salt)

        // create user
        const user = await User.create({name, email, password : hashedPassword})
        if (user) {
            res.status(201).json({
                _id : user.id,
                name : user.name,
                email : user.email,
                token : generateToken(user.id)

            })
        } else {
            res.status(400).json({message : "invalid user data"})
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "server error"})
    }
}

// @route POST /api/users/login
// @desc login user
// @access public
const loginUser = async(req, res)=>{
    try {
        //ge data from request body
        const email = typeof(req.body.email) === "string" && req.body.email.trim().length>0 ? req.body.email.trim() : false
        const password = typeof(req.body.password) === "string" && req.body.password.trim().length>=8 ? req.body.password.trim() : false

        // check if data is valid
        if (!email || !password) {
            return res.status(400).json({message : "missing required fields"})
        }
        
        //check if user exists and password is valid 
        const user = await User.findOne({email})
        console.log(user)
        
        if (user) {
            const validPassword = await bcrypt.compare(password, user.password)
            if (validPassword) {
                res.status(200).json({
                    _id : user.id,
                    name : user.name,
                    email : user.email,
                    token : generateToken(user.id)
                })
            }else {
                res.status(400).json({message : "invalid credentials"})
            }
        }else {
            res.status(400).json({message : "invalid credentials"})
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "server error"})
    }
}

// @route POST /api/users/me
// @desc get user profile
// @access private
const getMe = async(req, res)=>{
    try {
        //console.log(req.user)
        const user = await User.findById(req.user.id).select("-password")
        if (!user) {
            return res.status(404).json({message : "user not found"})

        }
        return res.status(200).json(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "server error"})
    }
}


// @route POST /api/users/:id
// @desc delete account
// @access private
const deleteUser = async(req, res)=>{
    try {
        // get user id as params
        const id = req.params.id
        // delete user
        if (req.user.id === id) {
            const user = await User.findByIdAndDelete(id)
            if (!user) {
                return res.status(404).json({message :  "user does not exist"})
            }
            res.status(200).json(user)
        }else {
            res.status(401).json({message : "unauthorized"})
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "server error"})
    }
}

const generateToken = (id)=> jwt.sign({id}, process.env.JWT_SECRET, {expiresIn : "30d"})
module.exports = {registerUser, loginUser, getMe, deleteUser}