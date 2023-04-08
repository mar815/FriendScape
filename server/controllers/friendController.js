const { v4: uuidv4 } = require('uuid');
const Friend = require('../models/FriendModel');

const getAllFriends = async (req, res) => {
  try {
    const friends = await Friend.find();
    res.json(friends);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getFriendById = async (req, res) => {
  try {
    const friend = await Friend.findById(req.params.id);
    if (!friend) {
      res.status(404).json({ message: 'Friend not found' });
    } else {
      res.json(friend);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createFriend = async (req, res) => {
  const {
    name,
    location,
    birthday,
    occupation,
    hobbies,
    favoriteMovies,
    favoriteMusic,
    travelGoals,
    favoriteFoods,
    goals
  } = req.body;
  const newFriend = new Friend({
    name,
    location,
    birthday,
    occupation,
    hobbies,
    favoriteMovies,
    favoriteMusic,
    travelGoals,
    favoriteFoods,
    goals
  });

  try {
    const savedFriend = await newFriend.save();
    res.status(201).json(savedFriend);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateFriend = async (req, res) => {
  try {
    const friend = await Friend.findById(req.params.id);
    if (!friend) {
      res.status(404).json({ message: 'Friend not found' });
      return;
    }
    const {
      name,
      location,
      birthday,
      occupation,
      hobbies,
      favoriteMovies,
      favoriteMusic,
      travelGoals,
      favoriteFoods,
      goals
    } = req.body;
    friend.name = name;
    friend.location = location;
    friend.birthday = birthday;
    friend.occupation = occupation;
    friend.hobbies = hobbies;
    friend.favoriteMovies = favoriteMovies;
    friend.favoriteMusic = favoriteMusic;
    friend.travelGoals = travelGoals;
    friend.favoriteFoods = favoriteFoods;
    friend.goals = goals;

    const savedFriend = await friend.save();
    res.json(savedFriend);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteFriend = async (req, res) => {
  try {
    const result = await Friend.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'Friend not found' });
    } else {
      res.json({ message: 'Friend deleted' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllFriends,
  getFriendById,
  createFriend,
  updateFriend,
  deleteFriend
};
