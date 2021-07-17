const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3450

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
})

app.listen(PORT, () =>{
    console.log('Server is running at PORT ' + PORT);
})

