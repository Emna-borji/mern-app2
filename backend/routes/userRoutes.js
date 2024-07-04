const { registerUser, loginUser, getMe, deleteUser } = require("../controllers/userController")

const router = require("express").Router()
const auth = require("../middleware/auth")

router.post("/", registerUser)
router.post("/login", loginUser)
router.get("/me", auth, getMe)
router.delete("/:id", auth, deleteUser)

module.exports = router