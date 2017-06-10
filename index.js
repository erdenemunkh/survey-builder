import express from "express";
import next from "next";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import DBConfig from "./data/DBConfig";
import * as models from "./data/models";
import apiRoutes from "./api";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    mongoose.Promise = global.Promise;
    mongoose.connect(DBConfig.path);
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));

    // server.use(session({
    //     secret: "geheimnis",
    //     saveUninitialized: true,
    //     store: new FileStore({
    //         path: "/tmp/sessions",
    //         secret: "geheimnis"
    //     }),
    //     resave: false,
    //     rolling: true,
    //     httpOnly: true,
    //     cookie: { maxAge: 604800000 } // 1 week
    // }));

    server.use(bodyParser.json());
    server.use((req, res, next) => {
        req.models = models;
        next();
    });

    // server.post("/api/login", (req, res) => {
    //     if (!req.body)
    //         return res.sendStatus(400);

    //     const token = req.body.token;
    //     firebase.auth().verifyIdToken(token)
    //         .then((decodedToken) => {
    //             req.session.decodedToken = decodedToken;
    //             return decodedToken;
    //         })
    //         .then((decodedToken) => res.json({ status: true, decodedToken }))
    //         .catch((error) => res.json({ error }))
    // });

    // server.post("/api/logout", (req, res) => {
    //     req.session.decodedToken = null;
    //     res.json({ status: true });
    // });
    server.use("/api", apiRoutes());

    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, (err) => {
        if (err)
            throw err
        console.log("> Ready on http://localhost:3000");
    });
});
