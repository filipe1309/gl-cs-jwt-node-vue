const User = require('../models/user.model.js');

exports.registerNewUser = async(req, res) => {
    try {
        let isUser = await User.find({ email: req.body.email });
        console.log(isUser);

        if (isUser.length >= 1) {
            return res
                .status(409)
                .json({ message: 'Sorry! This email is already registerd!' });
        }

        const newUser = new User(req.body);
        const user = await newUser.save();

        const token = await newUser.generateAuthToken();
        res
            .status(201)
            .json({ message: 'User created successfully!', user, token });
    } catch (err) {
        res.status(400).json({ err });
    }
};

// TODO
exports.loginUser = async(req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findByCredentials(email, password);

        if (!user) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const token = await user.generateAuthToken();
        res.status(200).json({ message: 'User authenticated', user, token });
    } catch (err) {
        res.status(400).json({ err });
    }
};

// TODO
exports.returnUserProfile = async(req, res) => {};