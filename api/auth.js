const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async (req, res) => {
        
        if (!req.body.cpf || !req.body.password) {
            return res.status(400).send('dados incompletos')
        } 

        const user = await app.db('users2')
            .where({ cpf : req.body.cpf })
            .first()

        if ( user ) {
            bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                if ( err || !isMatch ) {
                    return res.status(401).send('senha errada')
                }
                
                const payload = { id : user.id }
                res.json({
                    cpf: user.cpf,
                    name: user.name,
                    token: jwt.encode(payload, authSecret),
                })
            })
        } else {
            res.status(400).send('usuario nao cadastrado')
        }
    }

    return { signin }
}