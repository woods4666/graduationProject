1. 注册   POST   phone password
/user/register
返回 ：{
    code:0,  
    msg:'ok'
}

2. 登录   POST  phone password
/user/login 
返回 {
    code:0,
    msg:'ok;
}

3. 登出  GET  
/user/checkout  
返回  {
    code:0,
    msg:'ok'
}

4. 修改密码  POST  phone oldp(旧密码)  newp(新密码)
/user/modify
返回 {
    code:0,    //0 成功 1未知失败 2手机号或者旧密码不对
    msg:'ok'
}