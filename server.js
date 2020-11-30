require('dotenv').config()
const app = require("./app")
const PORT = 3000

const routes = require('./rotas')
routes(app)

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))