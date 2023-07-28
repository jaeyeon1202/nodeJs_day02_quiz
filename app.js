const express = require("express");
const router = require("./routes/common_router.js"); //라우터 가져오기
const memberRouter = require("./routes/member/member_router.js");후지산

const app = express();
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", router);
app.use("/member", memberRouter);


app.listen(3000, ()=>{ console.log("3000 서버 연동")});

//mvc패턴
// m: 모델, 데이터베이스 
// e: ejs, 뷰
// c: 컨트롤러