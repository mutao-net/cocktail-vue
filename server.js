const express = require('express');
const port = process.env.PORT || 5000;
const app = express({ strict: true });

app.use(express.static(__dirname + "/dist/"));

app.get(/.*/, function(req, res) {
    res.sendfile(__dirname + "/dist/index.html");
});

app.listen(port);
