const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 5002; 
// const index = require('./index');

app.use(express.json()); 
app.use(express.urlencoded()); 
// app.use('/', index); 
app.get('/example', (req, res) => {
    res.send('<p>Hello Home!</p>')
    }); 

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`)); 