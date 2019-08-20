const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!loggedDev)
            return res.status(400).json({ error: 'Dev logged not exists' });

        if (!targetDev)
            return res.status(400).json({ error: 'Dev target not exists' });

        if (targetDev.likes.includes(loggedDev._id)) { //aqui deu match
            const loggedSocket = req.connectedUsers[user]; //busando o socket do user logado
            const targetSocket = req.connectedUsers[devId];

            if(loggedSocket) {
                req.io.to(loggedSocket).emit('match' , targetDev); //avisando o usuario logado q deu match
            }

            if(targetSocket) {
                req.io.to(targetSocket).emit('match' , loggedDev); //avisando o usuario q recebeu o match q deu match
            }
        }

        if (loggedDev.likes.includes(targetDev._id)) {
            return res.status(404).json({ error: 'Match already exist' });
        }

        loggedDev.likes.push(targetDev._id); //salvando no vetor de likes
        await loggedDev.save();


        return res.json({ loggedDev });
    }
}