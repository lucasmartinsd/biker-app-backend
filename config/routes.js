module.exports = app => {
   
    app.post('/users/signup', app.api.user.save)
    app.post('/users/signin', app.api.auth.signin)
    app.post('/users/checkuser', app.api.check.checkuser)
    app.post('/users/changepass', app.api.changepassword.changepass)

}
