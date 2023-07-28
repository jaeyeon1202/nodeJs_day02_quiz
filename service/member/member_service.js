const member = require("../../database/member/memberDAO.js");

const list = () =>{
    console.log("service memberLIst 연결");
    return member
}
const logincheck = (id, name) =>{
    const m = member.filter( (v) =>
    v.id === id && v.name === name);
    if(m != 0) 
        return 0;
    else
        return 1;
}

const info = (id) =>{
    const m = member.filter( (v)=> 
    v.id === id);
    return m[0];
}
module.exports={list, logincheck, info};