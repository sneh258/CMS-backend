const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
app.use(cors());
app.use(express.json());
const recordRouter = require('./src/routes/record');
const collectionRouter = require('./src/routes/collection');
app.use('/collection', collectionRouter);
app.use('/record', recordRouter);

app.listen(port, () => {
    console.log(`started listening on port ${port}`);
});
