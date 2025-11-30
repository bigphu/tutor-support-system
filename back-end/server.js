const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config(); 

const database = require('./config/database'); 
const app = express();

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3001;


app.get("/", (req, res) => {
    return res.send("Hello World! sdaasdas");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


const authRoutes = require('./routes/authRoutes'); // Import route
const sessionRoutes = require('./routes/sessionRoutes');
const mylinksRoutes = require('./routes/mylinksRoutes');
const subjectviewRoutes = require('./routes/subjectviewRoutes');
const discoveryRoutes = require('./routes/discoveryRoutes');

// Khai báo Base URL cho API
app.use('/api', authRoutes); 
app.use('/api', sessionRoutes);
app.use('/api', mylinksRoutes);
app.use('/api', subjectviewRoutes);
app.use('/api', discoveryRoutes);
