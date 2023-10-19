import express from 'express'

const app = express();

app.get('/jalebi',(req, res)=>{
    res.send('Jalebi is sweet')
})
app.get('/samosa',(req,res)=>{
    res.send('samosa is spicy')
})
app.get('/pizza',(req,res)=>{
    res.send('pizza is so yummy')
})

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`server is running ${PORT}`)
})

