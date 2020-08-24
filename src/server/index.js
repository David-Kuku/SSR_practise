import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';

import App from '../shared/App';

const app = express();

app.use(express.static('public'));

app.get("*", (req,res) =>{
  res.send(`
  <!DOCTYPE html>
  <head>
  <title>Universal react</title>
  <link rel = "stylesheet" href="/css/main.css">
  <script src ="/bundle.js" defer></script>
  </head>

  <body>
  <div id ="root">${renderToString(<App />)}</div>
  </body>
  </html>
  `)
})
  
app.listen( process.env.PORT || 3000, () => {
    console.log(`Server is listening`);
});