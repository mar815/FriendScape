const express = require('express');
const router = express.Router();
const {
  getAllFriends,
  getFriendById,
  createFriend,
  updateFriend,
  deleteFriend
} = require('../controllers/friendController');


router.get('/', getAllFriends); 
router.get('/:id', getFriendById);
router.post('/', createFriend);
router.patch('/:id', updateFriend);
router.delete('/:id', deleteFriend);

module.exports = router;
