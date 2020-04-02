// CRUD create read  update delete
const {MongoClient, ObjectID} =  require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'Task-App'

/*const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)
console.log(id.getTimestamp())*/

MongoClient.connect(connectionURL, { useNewUrlParser: true} , (error,client) =>{
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

  /*  
   ----- DELETE ------
  
        db.collection('users').deleteMany({
                age: 26
            }).then((result) => {
                console.log(result)
            }).catch((error) => {
                console.log(error)
            }) 
        
        db.collection('tasks').deleteOne({
            description: 'Clean the house'
        }).then((result) => {
            console.log(result)
        }).catch((error) =>{
            console.log(error)
        })
        
    */

   /* 
     ------ UPDATE -------

    const updatePromise = db.collection('users').updateOne({
        _id: new ObjectID('5e7b6b1e6097fb3d343152aa')
    }, {
      $inc: {
            age: 1
      }
     })
  
     updatePromise.then((result) => {
        console.log(result)
     }).catch((error) => {
        console.log(error)
     })

     const updateManyPromise = db.collection('tasks').updateMany({
         completed: false
     },{
         $set:{
             completed: true
         }
     })

     updateManyPromise.then((result) => {
        console.log(result)
     }).catch((error) => {
        console.log(error)
     }) 



    */

   /* 
   -- FIND DOCUMENTS ---
   
    db.collection('users').findOne({ _id: new ObjectID("5e7b56065a2b47041cad6807")}, (error, user) =>{
        if(error){
            return console.log('Unable to fetch')
        }

        console.log(user)
    })

    db.collection('users').find({ age: 27}).toArray((error, users) =>{
        console.log(users)
    })

    db.collection('users').find({ age: 27}).count((error, count) =>{
        console.log(count)
    })
    

    db.collection('tasks').findOne({_id: new ObjectID('5e7b49d1c60ac11c64f21042')}, (error, task) => {
        if(error){
            return console.log('Task not found')
        }
        console.log(task)
    })
    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        console.log(tasks)
    })

    */

   /*
   
    -- INSERT DATA  --- 

   db.collection('users').insertOne({
       _id: id,
        name: 'Vikram',
        age: 26
    }, (error, result)=>{
        if(error){
            return console.log('Unable to insert user')
        }

        console.log(result.ops)

    }) 

    db.collection('users').insertMany([
        {
            name: 'Jen',
            age: 28
        },{
            name: 'Gunther',
            age: 25
        }
    ], (error, result)=>{
        if(error){
          return console.log('Erro')
        }
        console.log(result.ops)
    })

    db.collection('tasks').insertMany([
        {
            description: 'Clean the house',
            completed: true
        },
        {
            description: 'Renew inspection',
            completed: false
        },
        {
            description: 'Pot plants',
            completed: false
        }

    ], (error, result) => {
        if(error){
            return console.log('Error')
        }

        console.log(result.ops)
    }
    */

})