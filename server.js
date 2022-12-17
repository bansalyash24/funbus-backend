const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const port = process.env.PORT || 5000;
app.use(express.json());
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

const usersRoute = require("./routes/usersRoute");
const busesRoute = require("./routes/busesRoute");
const bookingsRoute = require("./routes/bookingsRoute");

app.use("/api/users", usersRoute);
app.use("/api/buses", busesRoute);
app.use("/api/bookings", bookingsRoute);
app.get("/",(req,res)=>{
    return res.send("Funbus backend working successfully");
})

app.listen(port, () => console.log(`Node server listening on port ${port}!`));
