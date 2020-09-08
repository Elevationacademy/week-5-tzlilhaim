const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema


const visitorSchema = new Schema( {
    name:String,
    homePlanet:{type:Schema.Types.ObjectId, ref:"Planet"},
    visitedPlanets:[{type:Schema.Types.ObjectId, ref:"Planet"}]
  })

const Visitor = mongoose.model( 'Visitor', visitorSchema )

module.exports = Visitor