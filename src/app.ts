import express from 'express'; // express 불러오기

const app = express();

app.get('/', (req, res) => {
    res.send('hi!!');
});

app.listen(1234, () => {
    console.log('1234 서버 열림');
});
