const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
    res.render('home')
    
  })
  
module.exports = router