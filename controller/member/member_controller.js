const service = require("../../service/member/member_service");

const login = (req, res) => {
    res.render("member/login");
}

const list = (req,res) =>{
    //console.log("list 연결");
    const member = service.list();
    res.render("member/list", {member:member});
}

const logincheck = (req,res) =>{
    const membercheck = service.logincheck(req.param("id"),req.param("name"));
    if(membercheck==0) {
        const member = service.list();
        res.render("member/list", {member:member})};
    
    res.render("member/login");
    
}

const info = (req,res) =>{
    const member= service.info(req.param("id"));
    res.render("member/info", {member:member});
}
module.exports = {login, list, logincheck, info};
