const express = require('express');
const cartRouter = express.Router();
const Cart = require("../models/cart");



cartRouter.get("/", (req, res, next) => {
    Cart.find({ user: req.user._id }, (err, carts) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(carts)
    })
})
cartRouter.post("/", (req, res, next) => {
    const cart = new Cart(req.body);
    cart.user = req.user._id;
    cart.save(function (err, newCart) {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(newCart)
    })
})
cartRouter.get('/:cartId', (req, res, next) => {
    Cart.findOne ({ _id: req.params.cartId, user: req.user._id }, (err, cart) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!cart) {
            res.status(404)
            return next (new Error("No items were found in your cart."));
        }
        return res.send(cart);
    })
})

cartRouter.put('/:cartId', (req, res, next) => {
    Cart.findOneAndUpdate(
        { _id: req.params.cartId, user: req.user._id },
        req.body, 
        { new: true },
        (err, cart) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);    
            }
            return res.send(cart);            
        }
    )
})

cartRouter.delete('/:cartId', (req, res, next) => {
    Cart.findOneAndRemove({ _id: req.params.cartId, user: req.user._id }, (err, cart) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(cart);
    })
})

module.exports = cartRouter;