const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema


const solarSystemSchema = new Schema( {
    planets:[{type:Schema.Types.ObjectId, ref:"Planet"}],
    starName:String
  })

const SolarSystem = mongoose.model( 'SolarSystem', solarSystemSchema )

module.exports = SolarSystem