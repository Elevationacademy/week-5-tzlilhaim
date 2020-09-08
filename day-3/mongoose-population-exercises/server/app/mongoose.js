const mongoose = require( 'mongoose' )
mongoose.connect( 'mongodb://localhost/exerciseDB', { useNewUrlParser: true, useFindAndModify: false } )

module.exports = mongoose