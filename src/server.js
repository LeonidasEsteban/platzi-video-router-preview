import express from 'express';
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from '../dist/ssr/app';

const app = express();
app.use(express.static('dist'));
app.use('/images', express.static('images'));

app.get('*', (req, res) => {
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App/>
    </StaticRouter>
  )

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Platzi Video</title>
        <link rel="stylesheet" href="/css/home.css"/>
      </head>
      <body>
        <div id="home-container">
          ${html}
        </div>
        <div id="modal-container"></div>
        <script src="/js/home.js"></script>
        <!-- <script src="http://localhost:9000/js/home.js"></script> -->
      </body>
      </html>
    `)
    res.end()
  }
})

app.listen(3000)

// console.log('La aplicación está corriendo en el puerto 3000')
