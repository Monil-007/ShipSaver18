const cookieSession = require("cookie-session");
const express = require('express');
const connectDB = require('./DB/database.js');
const passportSetup = require("./passport");
const passport = require("passport");
const app = express();

const bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
}));
//app.use(cors());
app.use(bodyParser.json());
const authRoute = require("./Routes/auth.js");
const routes = require('./Routes/route.js');

app.use(express.static('public'));

app.use('/', routes);
app.use(
    cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:3001",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

app.use("/auth", authRoute);

app.listen(3000, async function (req, res) {
    await connectDB();
    console.log("Jai shree krishna")
    //res.send("Hare krishna!!");
});