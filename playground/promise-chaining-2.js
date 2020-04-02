require('../src/db/mongoose')
const Task = require('../src/models/tasks')

Task.findByIdAndDelete('5e7b975f0b4e0f02a0d64cd9').then((task) =>{
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((result) =>{
    console.log(result)
}).catch((e) =>{
    console.log(e)
})

const deleteTaskandCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskandCount('5e7c94f604f42813d065f710').then((count) => {
    console.log(count)
}).catch((e) =>{
    console.log(e)
})