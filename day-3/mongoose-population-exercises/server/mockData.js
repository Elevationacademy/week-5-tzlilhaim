// Creating mock data to test routes
/* const mongoose = require("./app/mongoose")
const Planet = require("./models/Planet")
const Visitor = require("./models/Visitor")
const SolarSystem = require("./models/SolarSystem")


const s1 = new SolarSystem({
    planets: [],
    starName: "Polaris"
})

const p1 = new Planet({
    name:"Mercury",
    system: s1,
    visitors: []
})

const p2 = new Planet({
    name:"Venus",
    system: s1,
    visitors: []
})


const p3 = new Planet({
    name:"Neptune",
    system: s1,
    visitors: []
})

const v1 = new Visitor({
    name: "Methilda",
    homePlanet: p1,
    visitedPlanets:[p1]
})

const v2 = new Visitor({
    name: "Gertrude",
    homePlanet: p2,
    visitedPlanets:[p2]
})

const v3 = new Visitor({
    name: "Dominic",
    homePlanet: p3,
    visitedPlanets:[p3]
})

const planets = [p1,p2,p3]
planets.forEach(p=>s1.planets.push(p))

p1.visitors.push(v1)
p2.visitors.push(v1,v2)
p3.visitors.push(v1,v2,v3)

v1.visitedPlanets.push(p2,p3)
v2.visitedPlanets.push(p3)

s1.save()
planets.forEach(p=>p.save())
const visitors = [v1,v2,v3]
visitors.forEach(v=>v.save()) */