import express, { query } from 'express'

const app = express();
app.use(express.json());
app.get('/study',(req,res)=>{

    // const subject = req.query.subject;
    // const time = req.query.time;

    const {subject, time} = req.query;

    console.log(req.query)
    res.json({
        message: `Studying ${subject}, for ${time} hours`
    })
});

app.post('/breakfast',(req,res)=>{
    const {name, beaverage} = req.body;

    res.json({
        message:`good morning ${name}, here's your ${beaverage}`
    })
});

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`server is running ${PORT}`)
})

