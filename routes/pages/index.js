const router = require('express').Router();
const { User} = require("../../models");


router.get('/', (req, res) => {
    res.render('homepage');
})

router.get('/dashboard/:user_id', async (req, res) => {
    const userData = await User.findByPk(req.params.user_id, {
        attributes: [
            'username',
            'email'
        ]
    });

    const actualUserData = userData.get({plain: true});
    res.render('dashboard', actualUserData);
})
module.exports = router;