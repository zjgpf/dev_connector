const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const router = express.Router();

const UserModel = require('../models/User');

router.post('/', async (req, res) => {
  try {
    let { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    let user = await UserModel.findOne({ email });
    if (user) return res.status(400).json({msg: 'User already exists'});
    user = new UserModel({ name, email, password });
    await user.save();
    const payload = {
      user: {
        id: user.id
      }
    };
    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 60*60*1000},
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      } 
    );
  }
  catch (err) {
    console.error(err.message); 
    res.status(500).send('Server Error');
  }
});

module.exports = router;
