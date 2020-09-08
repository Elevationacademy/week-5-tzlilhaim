const express = require( 'express' )
const app = express()
const api = require( '../routes/api' )
const bodyParser = require( 'body-parser' )

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: false } ) )
app.use( '/', api )

module.exports = app