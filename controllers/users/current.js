const current = async (req, res) => {
  const { subscription, email } = req.user;
  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        email,
        subscription
      }
    }
  })
}

module.exports = current;