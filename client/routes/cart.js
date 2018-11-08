const express = require('express');
const cartRouter = express.Router();



cartRouter.get('/', (req, res, next) => {
    Cart.find({ user: req.user._id }, (err, carts) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(carts);
    })
})

