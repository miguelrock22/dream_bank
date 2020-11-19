import * as express from "express";
import { sequelize } from "./config/db";

const app = express();
app.get("/", (req, res) => {
    res.send("Hello World")
})

sequelize.authenticate().then(() => {
    console.log("Connected to postgress");
}).catch(err => {
    console.log(`Error ${err}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
});
