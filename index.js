const express = require('express');
const app = express();
const PORT = 8000;

app.get('/health', (req, res) => {
  res.send({ status: 'I am healthy' });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

