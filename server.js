const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the NFT Asset Management System');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
