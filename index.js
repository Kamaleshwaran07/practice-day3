import express from "express";
import { format } from 'date-fns';
import fs from 'fs';

const app = express();

const PORT = 4000;

// app.use('/', (req, res) => {
//     try {
//         res.status(200).json({message:"Welcome to the API"});
//     } catch (error) {
//         console.error(error);
//     }
// })
let today = format(new Date(), 'dd-MM-yyyy-HH-mm-ss')
let filePath = `TimeStamp/${today}.txt`
app.get('/write', (req, res) => {
    try {
        console.log("today", today);
        fs.writeFileSync(filePath, `${today}`, "utf8")
    } catch (error) {
        console.error(error);
    }
})
app.get('/read', (req, res) => {
    try {
        let data = fs.readFileSync(filePath, "utf8")
        res.status(200).send(`The timestamp for this ${data}`)
    } catch (error) {
        console.log(error);
    }
})
app.listen(PORT, () => {
     console.log("App is running in the port", PORT);
 })














