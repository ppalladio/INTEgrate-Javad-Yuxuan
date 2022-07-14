const express = require('express')
const bcrypt = require('bcrypt')
const fs = require('fs')
const { Router } = require('express')

const userDb = express.Router()

Router.post('/sign-up', async (req, res) => {
    const { name,eail, password } = req.body

    try{
        const user = userDb.filter(user => user.email ===email)

        if(user.length >0){
            return res.statusCode(400).json({error:'users already exist'})
        }
    } catch(error){
        
    }
})