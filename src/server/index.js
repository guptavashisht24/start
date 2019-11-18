const express = require('express');
const app = express();

app.get('/test', (req, res)=>{
  res.send('Hi there')
})


app.listen(3000,()=>{
  console.log(`Well hello there`);
})