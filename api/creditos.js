module.exports = app => {
    const getcreditos = async (req, res) => {
        
        if (!req.body.cpf) {
            return res.status(400).send('cpf nao chegou na requisicao')
        } 

        const user = await app.db('users2')
            .select("creditos")
            .where({ cpf: req.body.cpf })


        if ( user ) {
            res.send(user)
        } else {
            res.status(400).send('creditos nao encontrados')
        }
    }

    return { getcreditos }
}