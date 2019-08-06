const express = require("express");
const DevController = require('./controllers/DevController');


const routes = express.Router();

routes.post('/teste' , (req,res) => {
    return res.json(req.body);
});

routes.post('/devs' , DevController.store);

module.exports = routes;