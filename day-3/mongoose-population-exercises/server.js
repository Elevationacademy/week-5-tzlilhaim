const app = require("./server/app/app")
require("./server/app/mongoose")
const port = 3000


app.listen( port, () => console.log( `Server is listening on port ${ port }` ) )