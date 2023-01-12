const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

require('./config/mongoose.config')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const AllMyJokeRoutes = require('./routes/jokes.routes')
AllMyJokeRoutes(app)

const  PORT = process.env.PORT || 5000;
app.listen(PORT,console.log
    (`Hi Pablo Diez, your server's running on PORT ${PORT}! Would you like to proceed?`));