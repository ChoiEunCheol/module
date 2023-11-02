const express = require('express');
const path = require('path'); // Node.js의 내장 모듈인 path를 사용

const app = express();
const port = 3000; // 선택한 포트 번호

// 정적 파일을 제공할 디렉터리 설정
app.use(express.static(path.join(__dirname, 'public'));

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 ${port} 포트에서 실행 중입니다.`);
});
