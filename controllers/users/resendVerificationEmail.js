const { NotFound, BadRequest } = require("http-errors");

const { User } = require('../../models');

const { sendEmail } = require('../../helpers');

const resendVerificationEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new NotFound(`Found no user with "${email}" email.`);
  }

  if (user.verify) {
    throw new BadRequest("Verification has already been passed.")
  }

  const mail = {
    to: email,
    subject: "Email confirmation",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${user.verificationToken}">Confirm email</a>`,
  }

  await sendEmail(mail);

  res.json({
    message: "Verification email sent"
  });
}

module.exports = resendVerificationEmail;
