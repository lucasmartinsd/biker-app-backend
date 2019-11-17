const bcrypt = require('bcrypt-nodejs');

module.exports = app => {
    
    const obterHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }

    const changepass = (req, res) => {
        if (!req.body.cpf || !req.body.password) {
            return res.status(400).send('alguma informação não chegou na requisição')
        } 

        obterHash(req.body.password, hash => {
            const password = hash

            app.db('users')
                .where({ cpf: req.body.cpf })
                .update({ password })
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
            

        })
    }

    return { changepass }
}