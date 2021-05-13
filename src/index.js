const express = require ('express')
const mongoose = require('mongoose')
const cors = require('cors')// Importa as dependências

const routes = require ('./routes')// importa as rotas

require('dotenv').config()
const app = express()

mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}, console.log('Connected to database')) //Conexão com o banco


app.use(cors())
app.use(express.json())
app.use(routes) // usa as dependencias


app.listen(3000, () => console.log('Server is running')) // porta e retorna se está funcionando o servidor