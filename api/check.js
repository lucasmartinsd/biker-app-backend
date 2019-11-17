module.exports = app => {
    const checkuser = async (req, res) => {
        
        if (!req.body.cpf) {
            return res.status(400).send('cpf nao chegou na requisicao')
        } 

        const user = await app.db('users')
            .where({ cpf : req.body.cpf })
            .first()

        if ( user ) {
            res.status(204).send()
        } else {
            res.status(400).send('usuario nao cadastrado')
        }
    }

    return { checkuser }
}