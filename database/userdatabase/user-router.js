const router = require('express').Router();
const express = require('express');
const User = require('./user-model'); //API Model
const API = require('../apidatabase/api-model'); //API Model

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

//GET user's posts
router.get('/:id/api', (req, res) => {
    console.log(req.params.id);
    User.findById(req.params.id)
    .then(user =>{
        if(user){
            API.findBy({user_id: user.id}).then(api =>{
                res.status(200).json(api)
            })
            .catch(err =>{
                res.status(401).json({message: `Failed To Find Posts For: ${user.username}`})
            })
        } else{
            res.status(401).json({message: `Failed To Find User With ID: ${req.params.id} `})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'Failed To Get Users API'})
    })
})


// //POST new user
// router.post('/', (req, res) =>{
//     let newAPI = req.body;
//     User.insert(newUser).then(newAPI=>{
//         res.status(200).json(newAPI)
//     })
//     .catch(err=>{
//         res.status(500).json({message: 'Failed To Add New Post', APIent: newAPI})
//     })
// })
//DELETE user
router.delete('/:id', (req, res) =>{
    User.findById(req.params.id).then(user =>{
        if(user){
            API.remove(req.params.id).then(removed =>{
                res.status(200).json({success: 'deleted', id: user.id});
            }).catch(err=>{
                res.status(500).json({message: `Failed To Delete user w/ ID: ${req.params.id}`})
            })
        }
        else{
            res.status(401).json({message: `Could not Find user w/ ID: ${req.params.id}`})
        }
    }).catch(err => {
        res.status(500).json({message: 'Failed To Delete API'})
    })
})
module.exports = router;