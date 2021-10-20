//env variable
require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// config
import googleAuthConfig from "./config/googleconfig";
import routeConfig from "../server/config/routeconfig"

//API
import Auth from "./API/Auth/auth";
import Restaurent from "./API/Restaurent/restaurent";
import Food from "./API/Food/food";
import Menu from "./API/Menu/menu"
import Image from "./API/Image/image"
import Orders from "./API/Orders/orders"
import Reviews from "./API/Reviews/reviews"

//Database connection
import ConnectDB from "./database/connection";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

// passport configuration
googleAuthConfig(passport);
routeConfig(passport);

//For application routes
//localhost:4000/auth/signup
zomato.use("/auth", Auth);
zomato.use("/restaurent", Restaurent);
zomato.use("/food", Food);
zomato.use("/menu", Menu)
zomato.use("/image", Image)
zomato.use("/orders", Orders)
zomato.use("/reviews", Reviews)

zomato.get("/", (req, res) => res.json({ message: "SetUp Success Yay!!" }));

zomato.listen(4000, () =>
  ConnectDB()
    .then(() => console.log("Server is up and running"))
    .catch(() => console.log("DB connection failed"))
);
