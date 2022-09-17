const { Conflict } = require("http-errors");

const { User } = require('../../models/user');

const signup = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with email '${email}' already exists`)
  }
  const newUser = new User({ email, subscription });
  newUser.setPassword(password);
  newUser.save();

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email: email,
        password: password,
        subscription: subscription
      }
    }
  })
}

module.exports = signup;