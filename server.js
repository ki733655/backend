
const app = require("./app")

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from backend!')
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
