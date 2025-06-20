
const app = require("./app")

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from backend!')
})

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
