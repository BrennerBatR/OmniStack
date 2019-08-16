const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {

    //index usado para buscar varios dados
    async index(req, res) {
        const { user } = req.headers;

        const loggedUser = await Dev.findById(user); //verificar se esta logado

        if (loggedUser == null)
            return res.status(404).json({ error: "Usuário não encontrado" })
        const users = await Dev.find({ //$and = AND no where
            $and: [
                { _id: { $ne: user } },//todos usuarios q tem o id diferente do user
                { _id: { $nin: loggedUser.likes } },//todos usuarios q nao estao na LISTA de likes do loggeduser
                { _id: { $nin: loggedUser.deslikes } },//todos usuarios q nao estao na LISTA de deslikes do loggeduser
            ]
        })
        return res.json(users);

    },
    async store(req, res) {
        const { username } = req.body;
        const userExists = await Dev.findOne({ user: username });



        const response = await axios.get(`https://api.github.com/users/${username}`);


        const { name, bio, avatar_url: avatar } = response.data;

        const dev = await Dev.create({
            user: username,
            name,
            bio,
            avatar
        });

        /*if (userExists)
            return res.status(204).json({dev});*/

        return res.json({ dev });
    }
};