// app을 가져와서 서버를 구동
const app = require('../index');

app.listen(3000, () => {
    console.log('Server is running on 3000 port');
});