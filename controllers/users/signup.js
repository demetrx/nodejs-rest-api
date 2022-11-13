const { Conflict } = require("http-errors");
const gravatar = require('gravatar');
const { nanoid } = require("nanoid");

const { sendEmail } = require("../../helpers");
const { User } = require('../../models/user');

const signup = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with email '${email}' already exists`)
  }

  const verificationToken = nanoid();
  const avatarURL = gravatar.url(email);
  const newUser = new User({ email, subscription, avatarURL, verificationToken });

  newUser.setPassword(password);

  newUser.save();

  const mail = {
    to: email,
    subject: "Email confirmation",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm email</a>`
  }

  await sendEmail(mail)

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email,
        password,
        subscription,
        avatarURL,
        verificationToken,
      }
    }
  })
}

module.exports = signup;