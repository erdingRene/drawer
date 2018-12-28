var heroes = require('./data/data').heroes
var express = require('../client/node_modules/express');
var cors = require('../client/node_modules/cors')
var app = express();

app.use(cors())

app.route('/api/heroes').get ((req, res) => {
    res.send(heroes);
});

app.route('/api/heroes/:name').get((req, res) => {
    var heroID = 1;
    var heroName = 'test';
    const requestedHeroID = req.params['id'];
    heroes.forEach(function (element) {
        if (element == requestedHeroID){
            heroID = heroes.id(element)
            heroName = heroes.name(element)
        }

    } )
    res.send({id: heroID, name: heroes.name});
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

