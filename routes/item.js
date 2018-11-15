const express = require("express");
const itemRouter = express.Router();
const Item = require("../models/item");
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

itemRouter.get("/", (req, res, next) => {
  Item.find({}, (err, items) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.send(items);
  });
});

itemRouter.post("/", upload("photos", 8), (req, res, next) => {
  const item = new Item(req.body);
  item.user = req.user._id;
  item.save(function(err, newItem) {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(newItem);
  });
});
itemRouter.get("/:itemId", (req, res, next) => {
  Item.findOne({ _id: req.params.itemId, user: req.user._id }, (err, item) => {
    if (err) {
      res.status(500);
      return next(err);
    } else if (!item) {
      res.status(404);
      return next(new Error("No items were found in your item."));
    }
    return res.send(item);
  });
});

itemRouter.put("/:itemId", (req, res, next) => {
  Item.findOneAndUpdate(
    { _id: req.params.itemId, user: req.user._id },
    req.body,
    { new: true },
    (err, item) => {
      if (err) {
        console.log("Error");
        res.status(500);
        return next(err);
      }
      return res.send(item);
    }
  );
});

itemRouter.delete("/:itemId", (req, res, next) => {
  Item.findOneAndRemove(
    { _id: req.params.itemId, user: req.user._id },
    (err, item) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.send(item);
    }
  );
});

module.exports = itemRouter;
