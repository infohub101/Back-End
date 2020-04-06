const router = require('express').Router();
const User = require('./user-model'); //API Model
const userAPI = require('../userapidatabase/userapi-model'); //API Model
const bcrypt = require('bcryptjs');

//GET all apidatabase
router.get('/', (req, res) =>{
    User.find()
    .then(user =>{
        res.status(200).json(user)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed To GET API'})
    })
})

//GET userdatabase by id
router.get('/:id', (req, res) =>{
    User.findById(req.params.id).then(user =>{
        res.status(200).json(user)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed To Get user With That ID'})
    })
})

//GET user's API
router.get('/:id/api', (req, res) => {
    console.log(req.params.id);
    User.findById(req.params.id)
    .then(user =>{
        if(user){
            userAPI.findBy({user_id: user.id}).then(api =>{
                res.status(200).json(api)
            })
            .catch(err =>{
                res.status(401).json({message: `Failed To Find API For: ${user.username}`})
            })
        } else{
            res.status(401).json({message: `Failed To Find User With ID: ${req.params.id} `})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'Failed To Get Users API'})
    })
})

//UPDATE user
router.put('/:id', (req,res) =>{
    const {id} = req.params;
    const updatedUser = req.body;
    User.findById(id).then(user =>{
        if(user && bcrypt.compareSync(updatedUser.password, user.password)){
            console.log('user password not changed')
            User.update(updatedUser, id)
            .then(updated =>{
                res.status(201).json({success: 'updated', id: user.id, updated: updatedUser})
            })
        }else if(user && (!bcrypt.compareSync(updatedUser.password, user.password))){
            console.log('user password was changed')
            const hash = bcrypt.hashSync(updatedUser.password, 8); //hashes the updated password
            updatedUser.password = hash; //sets updated user password value to hashed password
            User.update(updatedUser, id).then(updated =>{
                res.status(201).json({success: 'updated', id: user.id, updated: updatedUser})
            })
        }else{
            res.status(401).json({message: `Could Not Find User With ID: ${id}`})
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Failed To Update User' });
      });
})

//DELETE user
router.delete('/:id', (req, res) =>{
    console.log("id", req.params.id);
    User.findById(req.params.id).then(user =>{
        console.log("user", user)
        if(user){
            User.remove(req.params.id).then(removed =>{
                res.status(200).json({success: 'User deleted', id: user.id});
            }).catch(err=>{
                res.status(500).json({message: `Failed To Delete user w/ ID: ${req.params.id}`})
            })
        }
        else{
            res.status(401).json({message: `Could not Find user w/ ID: ${req.params.id}`})
        }
    }).catch(err => {
        res.status(500).json({message: 'Failed To delete user'})
    })
})
module.exports = router;