import express, { query } from 'express'

const app = express();

app.get('/study',(req,res)=>{

    const subject = req.query.subject;
    const time = req.query.time;

    console.log(req.query)
    res.json({
        message: `Studying ${subject}, for ${time} hours`
    })
});


const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`server is running ${PORT}`)
})

