const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;



// middleware
app.use(cors());
app.use(express.json());


// Check it out the server site actually running or not
app.get("/", async(req, res) => {
    res.send('car-service-zoon-server site is running');
});


// sending port
app.listen(port, () => {
    console.log(`On port ${port}`);
});







