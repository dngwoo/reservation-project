import express from 'express'; // express 불러오기

const app = express();
const PORT = 3030;

app.get('/', (req, res) => {
    res.send('hi!!');
});

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
});
