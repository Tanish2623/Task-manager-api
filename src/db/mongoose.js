const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify : false
})




/*const me = new User ({
    name : '    Tanish    ',
    email : 'tanishverma@gmail.com    ',
    password : 'phone938'
})

me.save().then((me) => {
    console.log(me)
}).catch((error) =>{
    console.log(error)
})*/





/*const task = new Task({
    description: 'Learn the Moongoose libraray',
    completed : false
})

task.save().then(() =>{
    console.log(task)
}).catch((error) =>{
    console.log(error)
})*/