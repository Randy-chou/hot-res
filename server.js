const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/make-res', (req, res) => res.sendFile(path.join(__dirname, 'make-res.html')));


app.post('/api/reservations', (req, res) => {

    const newReservation = req.body;
  
    newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();
  
    if (reservations <= 5) {
    reservations.push(newReservation);
    } else { waitList.push(newReservation)
    }
    res.json(newReservation);
  });

app.listen(PORT, () => console.log(`App listening on PORT http://localhost:${PORT}`));