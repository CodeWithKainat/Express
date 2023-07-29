const app = require('express')
const router = app. Router()
const {signup,login} =require('./Controller')



router.post('/signup', signup )

router.post('/login' ,login )



module.exports = router