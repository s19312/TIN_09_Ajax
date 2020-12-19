const express = require("express");
const app = express();
const jsonParser = express.json();
app.post("./9b", jsonParser, function(request, response) {
    console.log(request.body);
    if (!request.body) {
        return response.sendStatus(400);
    }
    response.json(request.body);
});
app.get("./9b", function(request, response) {
    response.sendFile(__dirname + "/index.html");
});
app.listen(3333);