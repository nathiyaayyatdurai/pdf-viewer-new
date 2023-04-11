const fs = require('fs');
const express = require('express');
const app = express();

app.get('/downloadPdf', (req, res) => {
  const filePath = 'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf';
  const pdfContent = fs.readFileSync(filePath);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="file.pdf"');

  res.send(pdfContent);
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
