const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: { type: String, maxlength: 50, required: true },
    email: { type: String, maxlength: 30, required: true },
    password: { type: String, required: true },
    tokens: [{ token: { type: String, required: true } }],
}, {
    timestamps: true,
    collection: "users",
})

// Hash password before save
userSchema.pre("save", async function(next) {
    const user = this
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

userSchema.methods.generateAuthToken = async() => {
    const user = this
    const token = jwt.sign({ _id: user._id, name: user.name, email: user.email },
        "secret"
    )
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}

userSchema.statics.findByCredentials = async(email, password) => {
    const user = await User.findOne({ email })
    console.log(user)
    if (!user) {
        throw new Error("Wrong login")
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error("Wrong password")
    }

    return user
}

const User = mongoose.model("User", userSchema)

module.exports = User