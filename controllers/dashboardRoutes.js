const router = require('express').Router();
const { Post } = require('../models');

router.get('/dashboard', async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                yourPost: true,
            },
        });

        const yourPosts = postData.map((project) => project.get({ plain: true }));

        res.render('dashboard', { yourPosts });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;