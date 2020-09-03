const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const path = require("path");

const helmet = require('helmet')

// require('./config/passport')(passport); // pass passport for configuration

const app = express();
app.use(
  cors({
    // origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    credentials: true
  })
);


app.use(express.json());


//   mongoose.connect('mongodb+srv://cryptoinvest:PMQ7343TsK6oQP55@cluster0-uiayc.mongodb.net/crypto?retryWrites=true&w=majority',
//     { 
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         // useUnifiedTopology: true ,
//         useFindAndModify: false 
//       },
     
//   )
//     .then(() => console.log('Connected to MongoDB...'))
//     .catch(err => console.log(err.message));


  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
    limit : "50mb"
  }));
  /** VIEWS CONFIGURATION */
  /** SERVING PUBLIC FILES */
  app.use(express.static(path.join(__dirname, "public")));
  /** SERVING PUBLIC FILES */
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");
  /** VIEWS CONFIGURATION */
  

// Use Routes

app.use('/', require('./routes/home'))
// app.use('/', require('./routes/user'))




// routes ======================================================================
// require('./routes/auth.js'); // load our routes and pass in our app and fully configured passport
// require('./routes/referral.js')(app); // load our routes and pass in our app and fully configured passport
app.use(helmet())


/** END AUTH ROUTE */
// app.use('/api/signup', require('./routes/api/signUp'))
// app.use('/api/auth', require('./routes/api/auth'))
// app.use('/api/admin', require('./routes/api/admin'))


// app.use('/api/pay', require('./routes/api/coinpayment'))
// app.use('/api/discord', require('./routes/api/discord'));
// app.use('/api/paystack', require('./routes/api/paystack'))
// app.use('/profile/referal', require('./routes/referral'))
// app.use('/api/pacPay', require('./routes/api/pacPay'))












app.locals.title="Phone1"
app.locals.notifications = []
// app.localsauthenticated = !req.user.anonymous


app.set("port", process.env.PORT || 3333);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

