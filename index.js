require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./models/HoldingModels");
const { PositionModel } = require("./models/PositionModels");
const { OrderModels } = require("./models/OrderModels");
const { Signup, Login } = require("./Controllers/AuthController");
const { userVerification } = require("./Middlewares/AuthMiddleware");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

const cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

// Middleware to set credentials header
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

let corsOptions = {
  origin: ["https://dashboard-trading-platform-1.onrender.com", "http://localhost:3000"],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Set-Cookie']
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrderModels({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});
app.post("/signup", Signup);
app.post("/login", Login);
app.post('/verify', userVerification);

app.listen(PORT, () => {
  console.log("app started");
  mongoose.connect(uri)
    .then(() => console.log("DB Connected!"))
    .catch(err => console.error("DB Connection Error:", err));
});