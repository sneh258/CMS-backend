const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`started listening on port ${port}`);
});
