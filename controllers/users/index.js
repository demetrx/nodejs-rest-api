const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const current = require('./current');
const changeSubs = require('./changeSubs');
const updateAvatar = require('./updateAvatar')
const verifyEmail = require('./verifyEmail')
const resendVerificationEmail = require('./resendVerificationEmail')

module.exports = {
  signup,
  login,
  logout,
  current,
  changeSubs,
  updateAvatar,
  verifyEmail,
  resendVerificationEmail,
}