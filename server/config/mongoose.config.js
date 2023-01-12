const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/jokes-man', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connection to database successfully established'))
    .catch(err => console.log('Connection to database failed ', err))