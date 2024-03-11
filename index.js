import express from "express";
import { format } from 'date-fns';
import fs from 'fs';

const app = express();

const PORT = 4000;

app.get('/', (req, res) => {
    try {
        res.status(200).json({message:"Welcome to the 1st NodeJs Task"});
    } catch (error) {
        console.error(error);
    }
})
let today = format(new Date(), 'dd-MM-yyyy h:mm a')
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














