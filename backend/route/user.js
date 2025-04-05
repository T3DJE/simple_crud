const express = require('express')
const multer = require('multer')
const{
    read,
    create,
    readId,
    deleteData,
    update
}= require('../controller/user')

const upload = multer({dest: 'upload/'})
const router = express.Router()

router.get('/read', read)
router.get('/readId/:_id', readId)
router.post('/create', upload.single('image'), create)
router.put('/update/:_id', upload.single('image'),update)
router.delete('/delete/:_id', deleteData)

module.exports = router