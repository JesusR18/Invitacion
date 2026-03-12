const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// serve everything in the root (this folder) as static files
app.use(express.static(path.join(__dirname)));

// fallback to invitacion.html when visiting root or any unknown route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'invitacion.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
