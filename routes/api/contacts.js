const express = require('express');

const { validation, ctrlWrapper, auth } = require('../../middlewares')
const { joiSchema, statusJoiSchema } = require('../../models/contact');
const { contacts: ctrl } = require('../../controllers');

const router = express.Router()

router.get('/', auth, ctrlWrapper(ctrl.getAll))

router.get('/:id', ctrlWrapper(ctrl.getById))

router.post('/', auth, validation(joiSchema), ctrlWrapper(ctrl.add))

router.put('/:id', validation(joiSchema), ctrlWrapper(ctrl.updateById))

router.patch("/:id/favorite", auth, validation(statusJoiSchema), ctrlWrapper(ctrl.updateStatus))

router.delete('/:id', auth, ctrlWrapper(ctrl.removeById))

module.exports = router
