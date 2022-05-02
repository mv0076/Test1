const express = require("express");
const bodyparser = require("body-parser");
const router = express.Router();
const Promo = require("../models/promotions");
router.use(bodyparser.json());

router.post("/create", (req, res, next) => {
  Promo.create(req.body)
    .then((promo) => {
      console.log("promotion Created ", promo);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(promo);
    })
    .catch((err) => next(err));
});

router.get("/getpromo", (req, res, next) => {
  Promo.find()
    .then((promos) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(promos);
    })
    .catch((err) => next(err));
});

router.get("/get/:promoId", (req, res, next) => {
  const Id = req.params.promoId;
  Promo.findById(Id)
    .then((promo) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(promo);
    })
    .catch((err) => next(err));
});

router.put("/update/:promoId", (req, res, next) => {
  const Id = req.params.promoId;
  Promo.findByIdAndUpdate(Id, { $set: req.body }, { new: true })
    .then((promo) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(promo);
    })
    .catch((err) => next(err));
});

router.delete("/delete/:promoId", (req, res, next) => {
  const Id = req.params.promoId;
  Promo.findByIdAndRemove(Id)
    .then((promo) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ message: "promotion deleted succusefully", data: promo });
    })
    .catch((err) => next(err));
});

module.exports = router;
