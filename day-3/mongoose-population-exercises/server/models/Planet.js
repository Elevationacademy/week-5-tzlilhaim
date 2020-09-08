const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema


const planetSchema = new Schema( {
    name:String,
    system:{type: Schema.Types.ObjectId, ref: "SolarSystem"},
    visitors:[{type: Schema.Types.ObjectId, ref: "Visitor"}]
    
  })

const Planet = mongoose.model( 'Planet', planetSchema )

module.exports = Planet