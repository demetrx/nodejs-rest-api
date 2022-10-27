const { Contact } = require("../../models");

const getAll = async (_, res) => {
  const result = await Contact.find({});
  res.json({
    status: 'success',
    code: 200,
    data: {
      result
    }
  });
};

module.exports = getAll;