module.exports = app => {
   
    app.post('/users/signup', app.api.user.save)
    app.post('/users/signin', app.api.auth.signin)
    // app.get('/users', (req, res) => {
    //     res.json(req.body.cpf)
    // });

    // app.post('/users', (req, res) => {
    //     res.status(200).send('user=' + req.body.cpf)
    // });
}
