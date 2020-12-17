const router = require('express').Router();
const { Post } = require('../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findall({
            order: [['datePosted', 'ASC']],
        });

        const posts = postData.map((project) => project.get({ plain: true }));

        res.render('homepage', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;