// Required modules
const router = require('express').Router();
const util = require("./../utilities/utilities.js");
//const jwt = require('jsonwebtoken');

router.post("/", async function(req, res) {
    try {
        console.log(req.body);      
    }
    catch(e) {
        console.log(e);
    }
})

module.exports = router;