const express = require('express');

const app = express();

app.get('/', (req,res)=> {
    return res.json({evento:"OmniStack 11", aluna:"Júlia D. Craide"});
});

app.listen(3333);

