const express = require('express')
const app = express()


app.use(express.static(__dirname + '/public'))


const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Express started on http://localhost:${port};`))