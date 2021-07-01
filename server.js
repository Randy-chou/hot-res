const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/home.html')));

app.get('/table', (req, res) => res.sendFile(path.join(__dirname, '/public/tables.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, '/public/make-res.html')));

app.get('/api/reservations', (req, res) => res.json(reservations));
app.get('/api/waitlist'), (req, res) => res.json(waitlist)

app.post('/api/reserve', (req, res) => {

    const newReservation = req.body;

    if (reservations <= 5){
    reservations.push(newReservation);
    } else {
        waitlist.push(newReservation)
    }
    res.json(newReservation);
  });

app.listen(PORT, () => console.log(`App listening on PORT http://localhost:${PORT}`));