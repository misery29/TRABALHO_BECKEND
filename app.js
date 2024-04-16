const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.use(express.json())

// conexões com o banco
const conn = require("./db/conn")

conn()

//rotas
const routes = require("./routes/router")

app.use('/api', routes)

app.listen(3000, function(){
    console.log("rodando :)")
})   

//jjKKRhna6VO3fMZA