const { User } = require('../../models/user');

const changeSubs = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;
  const user = await User.findByIdAndUpdate(_id, { subscription }, { runValidators: true });
  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      user: {
        email: user.email,
        subscription: subscription
      }
    }
  });
}

module.exports = changeSubs;