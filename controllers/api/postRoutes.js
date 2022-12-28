const router = require('express').Router();
const { BlogPost, User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const postData = await BlogPost.findAll({
      raw: true,
      include: {
        model: User,
        attributes: {
          include: 'name',
          exclude: ['id', 'email', 'password'],
        },
      },
    });
    console.log(postData);
    res.json(postData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;