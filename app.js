const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// 정적 파일을 제공할 디렉터리 설정
app.use(express.static(__dirname));

// 서버 시작
app.listen(port, () => {
  console.log(`http://localhost:3000`);
});
