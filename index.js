const app = require('express')()
const routes = require('./routes')
const cors = require('./middlewares/cors')
const dbConnect = require('./config/mongoDB')
const port = process.env.PORT || 5000


app.use(cors)
require('./config/bodyParser')(app)
app.use(routes)

dbConnect()
.then(() => app.listen(port, console.log(`Server running on port ${port}...`)))
.catch(err => console.log(err))