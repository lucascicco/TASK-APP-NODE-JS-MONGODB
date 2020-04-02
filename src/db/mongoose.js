const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
})

/* const User = mongoose.model('User',{
    nome:{
        type: String, 
        required: true,
        trim: true
    },
    password:{
        type: String,
        required:true, 
        minlength: 7,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }
    },  
    email:{
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    age:{
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    }
}) 

const me = new User({
    nome: '   Lucas',
    email: 'Lucasciccomy@gmail.com',
    password: '12345677'
})

me.save().then(() =>{
    console.log(me)
}).catch((error) => {
    console.log(error)
})


const Tasks = mongoose.model('Task', {
    description: {
        type: String,
        trim:true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Tasks({
    description: '     Clean the house',
})

task.save().then(() => {
    console.log(task)
}).catch((Erro) => {
    console.log('Erro é: ' , Erro)
})
/USERS/LUCAS/mongodb/bin/mongod.exe --dbpath=/Users/Lucas/mongodb-data
*/