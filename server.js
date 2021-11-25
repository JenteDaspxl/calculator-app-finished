const app = require("./app");
const { config } = require("dotenv");

config({
    path: __dirname + "/.env"
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Server running (${port})`);
