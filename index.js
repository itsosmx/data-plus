const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000



app.use(express.json())
app.use(require('body-parser').urlencoded({ extended: false }));

app.use('/', routes)
app.get('/', (_, res) => res.json({ message: "Hello world" }))


const listen = app.listen(PORT, () => console.log('Listening.......'))


// info/first_name?size=50