const express = require('express')
const app = express()
const port = 3000
const multer = require('multer')
const mimeTypes = require('mime-types')

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req, file, cb){
        cb("", Date.now() + file.originalname + "." + mimeTypes.extension(file.mimetype))
    }
})

const upload = multer({
    storage: storage
})

app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + "/views/index.html")
})

app.post("/files", upload.single('avatar'),(req, res) => {
    res.send("melos caramelos")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))