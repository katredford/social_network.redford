const { User } = require('../models');
const userController = {
    //get all users
    getAllUsers(req, res) {
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch (err => {
            console.log(err, allUser);
            res.status(400).json(err);
        });
    },

    //get one user by id
    getUserById({params}, res) {
        User.findOne({_id: params.id })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No pizza found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err, oneUser);
            res.status(400).json(err);
        });
    },

};

module.exports = userController;