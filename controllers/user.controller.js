const User = require('../models/user.model');

//Get All Users
const getUsers = async (req, res) => {
    try {
        const Users =  await User.find({});
        res.status(200).json(Users);
  
      } catch (error) {
          res.status(500).json({message: error.message});
      }
}
//Get a Specific User
const getSpecificUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user =  await User.findById(id);
        res.status(200).json(user);
      } catch (error) {
          res.status(500).json({message: error.message});
      }
}
//Add a User
const addUser = async (req, res) => {
    try {
        const user =  await User.create(req.body);
        res.status(200).json(user);
  
      } catch (error) {
          res.status(500).json({message: error.message});
      }
}
//Update a User
const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if(!user){
            return res.status(404).json({message: 'User not found'})
        }
        const updateduser = await User.findById(id);
        res.status(200).json(updateduser);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
//Delete a User
const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message: 'User not found'})
        }
        res.status(200).json('User Deleted successfully');
   } catch (error) {
        res.status(500).json({message: error.message});
   }
}

module.exports = {
    getUsers,
    getSpecificUser,
    updateUser,
    addUser,
    deleteUser
}