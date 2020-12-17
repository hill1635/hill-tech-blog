const router = require('express').Router();
const { Post } = require('../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            order: [['datePosted', 'DESC']],
        });

        const posts = postData.map((project) => project.get({ plain: true }));

        res.render('homepage', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});

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