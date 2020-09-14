const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const UserModel = require('../models/User');

router.get('/', auth, async (req, res) => {
  try {
    const id = req.user.id; 
    const user = await UserModel.findById(id).select('-password');
    res.json(user);
  }
  catch (err) {
    console.err(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
