const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

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

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json({msg: 'Invalid Credentials'});
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({msg: 'Invalid Credentials'});
    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 1000*60*60*24*100 },
      (err, token) => {
        if (err) throw err;
        res.json({token});
      }
    );
  }
  catch (err) {
    console.err(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
