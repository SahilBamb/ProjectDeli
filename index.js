// importing all dependencies
const {express, app, path, mongoose, ejsMate, methodOverride, morgan, AppError} = require('./dependencies');

// importing all routes
const {homeRoutes, storeRoutes, profileRoutes, adoptRoutes, itemsRoutes, petsRoutes, detailRoutes} = require('./routes/exportAllRoutes');

const cookieParser = require('cookie-parser'); // for Client Cookies
const session = require('express-session'); // for Server Cookies
const flash = require('connect-flash'); // for Flash Messages

// connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/DemiApp', { useNewUrlParser: true, useUnifiedTopology: true })
.then (() => console.log('Connected to MongoDB'))
.catch(err => {
    console.log('Error connecting to MongoDB', err.message);
})

// Schemas to be used
const {User,Pet,Item,RealPet,RealItem} = require('./models/exportAllModels');
app.engine('ejs' , ejsMate)

// Paths to Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middleware will run on every single request (intercepts req and can alter res)
app.use(session({secret:'notagoodsecret'}));
app.use(flash());
app.use(express.urlencoded({ extended: true })); 
app.use(methodOverride('_method'));
// app.use(morgan('tiny'));
app.use(express.static('static/nav'));
app.use(cookieParser('thisismysecret'));

app.use( async (req, res, next) => {
    const user = await User.findOne({name: 'Sahil'});
    res.locals.user = user;
    res.locals.messages = req.flash('success');
    next();
});

app.use('/home', homeRoutes);
app.use('/store', storeRoutes);
app.use('/profile', profileRoutes);
app.use('/adopt', adoptRoutes);
app.use('/items', itemsRoutes);
app.use('/pets', petsRoutes);
app.use('/details', detailRoutes);

app.use((err, req, res, next) => {
    const {status = 500, message = 'Something Went Wrong'} = err;
    res.status(status).send(message);
});

app.use((req, res) => {
    res.status(404).send("<h1> Page not found </h1>");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});