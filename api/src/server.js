const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


// Routes files
const brandRoute = require("./routes/brands");

const app = express();

app.use(cors());

app.use(express.json(
    {
        limit: "20mb"
    }
));

// Mount routers
app.use("/api/v1/brands", brandRoute); 

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port: ${server.address().port}`);
});

