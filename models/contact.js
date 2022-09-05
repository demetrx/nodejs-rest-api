const { Schema, model } = require('mongoose');
const Joi = require('joi');

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
    minlength: 5,
    maxlength: 15,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
}, { versionKey: false, timestamps: true })

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email(),
  phone: Joi.string().min(5).max(15),
  favorite: Joi.bool(),
})

const statusJoiSchema = Joi.object({
  favorite: Joi.bool().required(),
})

const Contact = model("contact", contactSchema)

module.exports = { Contact, joiSchema, statusJoiSchema }