const express = require('express');
const fetch = require("node-fetch");
const auth = require('../middleware/auth');
const checkObjectId = require('../middleware/checkObjectId');

const router = express.Router();

const ProfileModel = require('../models/Profile');
const UserModel = require('../models/User');

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await ProfileModel.findOne({
      user: req.user.id
    }).populate('user', ['name']);
    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post( '/', auth, async (req, res) => {
  const {
    company,
    location,
    website,
    bio,
    skills,
    status,
    githubusername,
    youtube,
    twitter,
    instagram,
    linkedin,
    facebook
  } = req.body;
  const profileFields = {
    user: req.user.id,
    company,
    location,
    website,
    bio,
    skills: Array.isArray(skills)
      ? skills
      : skills.split(',').map((skill) => ' ' + skill.trim()),
    status,
    githubusername
  };
  const socialfields = { youtube, twitter, instagram, linkedin, facebook };
  profileFields.social = socialfields;
  try {
    let profile = await ProfileModel.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/', async (req, res) => {
  try {
    const profiles = await ProfileModel.find().populate('user', ['name']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/user/:user_id', checkObjectId('user_id'), async ({ params: { user_id } }, res) => {
  try {
    const profile = await ProfileModel.findOne({
      user: user_id
    }).populate('user', ['name']);
    if (!profile) return res.status(400).json({ msg: 'Profile not found' });
    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: 'Server error' });
  }
});

router.delete('/', auth, async (req, res) => {
  try {
    //await Post.deleteMany({ user: req.user.id });
    await ProfileModel.findOneAndRemove({ user: req.user.id });
    await UserModel.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/experience', auth, async (req, res) => {
  const {
    title,
    company,
    location,
    from,
    to,
    current,
    description
  } = req.body;
  const newExp = {
    title,
    company,
    location,
    from,
    to,
    current,
    description
  };
  try {
    const profile = await ProfileModel.findOne({ user: req.user.id });
    profile.experience.unshift(newExp);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/experience/:exp_id', auth, async (req, res) => {
  try {
    const foundProfile = await ProfileModel.findOne({ user: req.user.id });
    foundProfile.experience = foundProfile.experience.filter(
      (exp) => exp._id.toString() !== req.params.exp_id
    );
    await foundProfile.save();
    return res.status(200).json(foundProfile);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
});

router.post('/education', auth, async (req, res) => {
  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description
  } = req.body;
  const newEdu = {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description
  };
  try {
    const profile = await ProfileModel.findOne({ user: req.user.id });
    profile.education.unshift(newEdu);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/education/:edu_id', auth, async (req, res) => {
  try {
    const foundProfile = await ProfileModel.findOne({ user: req.user.id });
    foundProfile.education = foundProfile.education.filter(
      (edu) => edu._id.toString() !== req.params.edu_id
    );
    await foundProfile.save();
    return res.status(200).json(foundProfile);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
});

router.get('/github/:username', async (req, res) => {
  try {
    const _data = await fetch(`https://api.github.com/users/${req.params.userName}/repos?per_page=5&sort=created:asc`);
    const data = await _data.json();
    return res.json(data);
  } catch (err) {
    console.error(err.message);
    return res.status(404).json({ msg: 'No Github profile found' });
  }
});

module.exports = router;
