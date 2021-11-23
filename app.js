const express = require('express')
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))

// Define Routes
app.use('/', require('./routes/index'));
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));