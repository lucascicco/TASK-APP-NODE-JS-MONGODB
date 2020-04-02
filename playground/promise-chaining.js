require('../src/db/mongoose')
const User = require('../src/models/user')

/* User.findByIdAndUpdate('5e7cac78d48aaf262cb50a4c',{age: 19}).then((user) => {
    console.log(user)
    return User.countDocuments({ age:19 })
}).then((result) =>{
    console.log(result)
}).catch((e) =>{
    console.log(e)
})
*/

const updateAgeAndCount = async (id,age) => {
    const user = await User.findByIdAndUpdate(id , {age: age})
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5e7cad5c38f8852e482ed143', 20).then((count)=>{
    console.log(count)
}).catch((e) => {
    console.log(e)
})