const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let reservations = [];

let waitlist = [];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/home.html')));

app.get('/table', (req, res) => res.sendFile(path.join(__dirname, '/public/tables.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, '/public/make-res.html')));

app.get('/api/reservations', (req, res) => res.json(reservations));

app.get('/api/waitlist', (req, res) => res.json(waitlist));

app.post('/api/reserve', (req, res) => {

    const newReservation = req.body;

    if (reservations.length < 5) {
        reservations.push(newReservation);
        res.json(newReservation);
    } else {
        waitlist.push(newReservation)
        res.end();
    }
});

app.post('/api/clear', (req, res) => {
    reservations = [];
    waitlist = [];
    console.log("cleared database");
    res.end();
});


app.listen(PORT, () => console.log(`App listening on PORT http://localhost:${PORT}`));