const JokeController = require('../controllers/jokes.controller')

module.exports = app => {
    app.get('/', (req, res) => {
        res.send('Welcome to the world of jokes');
    });
    app.get('/api/jokes', JokeController.getAllJokes)
    app.get('/api/jokes/:id', JokeController.getOneJoke)
    app.post('/api/jokes', JokeController.createJoke)
    app.put('/api/jokes/:id', JokeController.updateJoke)
    app.delete('/api/jokes/:id', JokeController.deleteJoke)
}