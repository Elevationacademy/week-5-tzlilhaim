const mongoose = require("../app/mongoose")
const express = require("express")
const router = express.Router()

const Planet = require("../models/Planet")
const Visitor = require("../models/Visitor")
const SolarSystem = require("../models/SolarSystem")
const { populate } = require("../models/Planet")

router.get("/visitors", function (req, res) {
  Visitor.find({}, function (err, visitors) {
    if (err) {
      console.log(err)
    }
    res.send(visitors)
  })
})

router.get("/visitors/:id/listPlanets", function (req, res) {
  const id = req.params.id
  Visitor.findById(id, { visitedPlanets: 1 })
    .populate("visitedPlanets")
    .exec(function (err, visitor) {
      if (err) {
        console.log(err)
      }
      console.log(visitor)
      res.send(visitor)
    })
})

router.get("/planets/:id/listVisitors", function (req, res) {
  const id = req.params.id
  Planet.findById(id, { visitors: 1 })
    .populate("visitors")
    .exec(function (err, visitors) {
      if (err) {
        console.log(err)
      }
      res.send(visitors)
    })
})

router.get("/solarSystems/:id/listVisitors", function (req, res) {
  const id = req.params.id
  SolarSystem.findById(id)
    .select({ planets: 1 })
    .populate({ path: "planets", populate: { path: "visitors" } })
    .exec(function (err, data) {
      if (err) {
        console.log(err)
      }
      const uniqueVisitors = []
      data.planets.forEach((p) => {
        for (let visitor of p.visitors) {
          if (uniqueVisitors.some((v) => v === visitor)) {
            continue
          } else {
            uniqueVisitors.push(visitor)
          }
        }
      })
      res.send(uniqueVisitors)
    })
})

router.get("/visitors/:id/star", function (req, res) {
  const id = req.params.id
  Visitor.findById(id)
    .populate({ path: "homePlanet", populate: { path: "system" } })
    .exec(function (err, data) {
      if (err) {
        console.log(err)
      }
      res.send(data.homePlanet.system.starName)
    })
})

router.get("/planets/:id/starAndVisitors", function (req, res) {
  const id = req.params.id
  Planet.findById(id)
    .populate("system visitors")
    .exec(function (err, result) {
      if (err) {
        console.log(err)
      }
      const star = result.system.starName
      const visitors = result.visitors
      res.send({ star: star, visitors: visitors })
    })
})

module.exports = router
