const express = require('express');

const { auth, upload, validation, ctrlWrapper } = require('../../middlewares');
const { joiLoginSchema, joiSignupSchema, joiChangeSubsSchema } = require('../../models/user');
const { users: ctrl } = require('../../controllers');

const router = express.Router();

router.post('/signup', validation(joiSignupSchema), ctrlWrapper(ctrl.signup));

router.post('/login', validation(joiLoginSchema), ctrlWrapper(ctrl.login));

router.get('/logout', auth, ctrlWrapper(ctrl.logout));

router.get('/current', auth, ctrlWrapper(ctrl.current));

router.patch('/avatars', auth, upload.single('avatar'), ctrlWrapper(ctrl.updateAvatar));

router.patch('/', validation(joiChangeSubsSchema), auth, ctrlWrapper(ctrl.changeSubs));

module.exports = router;