
const verify = (req, res, next) => {
    next();
};

app.get('/fakeUser', (req, res) => {
    const user = {username: 'Sahil', password: 'password'};
    req.session.user = user.username;
    res.send('You have reached the fake user route ' + req.session.user);
}); 

app.get('/setName', (req, res) => {
    res.cookie('name', 'Sahil' , {signed: true}, {maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true});
    res.send('Name has been set');
    });

app.get('/getSignedCookie', (req, res) => {
    res.send('Signed Cookie Name Value  is: ' + req.signedCookies.name);
    });

app.get('/addMoney', async (req, res) => {
    const {money} = req.params;
    const user = await User.findOne({name: 'Sahil'});
    user.money += 1;
    await user.save();
    req.flash('success', 'Added $1 to Your Account!');
    res.send('Added $1 to Your Account!');
});