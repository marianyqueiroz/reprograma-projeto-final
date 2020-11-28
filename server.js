const app = require("./src/app");
const port = 8080;

app.listen(port, () => {
    console.log(`app.js está rodando na porta ${port}`);
});