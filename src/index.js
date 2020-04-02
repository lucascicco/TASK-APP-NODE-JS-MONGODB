const express = require('express')
require('./db/mongoose')

const app = express()
const port = process.env.PORT

const userRouter = require('./router/user')
const taskRouter = require('./router/task')


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const multer = require('multer')

// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb){
//      if(!file.originalname.match(/\.(doc|docx)$/)){
//          return cb(new Error('Please upload a Word document'))
//         }
    
//     cb(undefined,true)
//     }   

// })


// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// },(error, req,  res, next) => {
//     res.status(400).send({error: error.message})
// })

// app.use((req,res,next) =>{
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')
//     }else{
//         next()
//     }
// })

// app.use((req,res,next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })



/*
const bcrypt = require('bcrypt')
const myFunction = async () => {
    const password = '19999999'
    const hashedPassword = await bcrypt.hash(password, 8)
    console.log(hashedPassword)
    const isMatch = await bcrypt.compare('19999999' , hashedPassword)
    console.log(isMatch)
    myFunction()
}*/

// const pet = {
//     name: 'Hal'
// }
// pet.toJSON = function () {
//     return {}
// }

// console.log(JSON.stringify(pet))

// const Task =  require('./models/task')
// const User = require('./models/user')

// const main = async () => {
    
//     //  const task = await Task.findById('5e83502bf72d5b2e8c88fbc2')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5e834c16881f3c224cef692f')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)

//main()
// }

