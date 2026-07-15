const express = require('express');
const app = express();
const PORT = 4000;


app.get('/', (req, res) => {
  res.send('Welcome to my protfolio. I am omor');
});

app.get('/contacts', (req, res) =>{
  const html = `<body>
    <h1>Contact Me</h1>
    <p>Email: omorsultan@gmail.com
  </body>`
  res.send(html);
})

app.get('/education', (req, res) =>{
  const html = `<body>
    <h1>Education</h1>
    <p>University: Shahjalal University of Science and Technology</p>
    <p>Degree: B.Sc in Software Engineering</p>
    <p>Year: 2020-2024</p>
  </body>`
  res.send(html); 
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});