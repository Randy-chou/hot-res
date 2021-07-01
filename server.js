const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


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