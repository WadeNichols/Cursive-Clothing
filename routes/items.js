const express = require('express');
const itemRouter = express.Router();
const Items = require("../models/items");



itemRouter.get("/", (req, res, next) => {
    Items.find({ item: req.item._id }, (err, items) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(items)
    })
})
itemRouter.post("/", (req, res, next) => {
    const item = new Item(req.body);
    item.user = req.user._id;
    item.save(function (err, newItem) {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(newItem)
    })
})