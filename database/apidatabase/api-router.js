const router = require('express').Router();
const express = require('express');
const API = require('./api-model'); //API Model

//GET all apidatabase
router.get('/', (req, res) =>{
    API.find()
    .then(API =>{
        res.status(200).json(API)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed To Get API'})
    })
})

//GET apidatabase by id
router.get('/:id', (req, res) =>{
    API.findById(req.params.id).then(api =>{
        res.status(200).json(api)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed To Get API With That ID'})
    })
})
//POST new API
router.post('/', (req, res) =>{
    let newAPI = req.body;
    API.insert(newAPI).then(newAPI=>{
        console.log("NEW API", newAPI)
        res.status(201).json(newAPI)
    })
    .catch(err=>{
        res.status(500).json({message: 'Failed To Add New API to the database', APIent: newAPI})
    })
})
//DELETE API
router.delete('/:id', (req, res) =>{
    API.findById(req.params.id).then(api =>{
        if(api){
            API.remove(req.params.id).then(removed =>{
                res.status(200).json({success: 'API deleted', id: api.id});
            }).catch(err=>{
                res.status(500).json({message: `Failed To Delete API: ${req.params.id}`})
            })
        }
        else{
            res.status(401).json({message: `Could not Find API w/ ID: ${req.params.id}`})
        }
    }).catch(err => {
        res.status(500).json({message: 'Failed To Delete API'})
    })
})
module.exports = router;