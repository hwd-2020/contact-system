import{d as e,p as l,a as i,r as s,o as n,b as o,h as a,e as c,w as t,f as r}from"./vendor.f2c1d879.js";const u=[{label:"概览",icon:"el-icon-menu",link:"/home"},{label:"用户信息",icon:"el-icon-user",children:[{label:"用户",icon:"el-icon-user",link:"/list/user"},{label:"短信验证码",icon:"el-icon-user",link:"/list/user-sms"},{label:"金融账户",icon:"el-icon-user",link:"/list/user-account"},{label:"收货地址",icon:"el-icon-user",link:"/list/user-address"}]},{label:"用户资产",icon:"el-icon-user",children:[{label:"积分",icon:"el-icon-user",link:"/list/points"},{label:"奖励",icon:"el-icon-user",link:"/list/user-reward"},{label:"提现",icon:"el-icon-user",link:"/list/user-cash"},{label:"账单",icon:"el-icon-user",link:"/list/user-bill"}]},{label:"商城管理",icon:"el-icon-user",children:[{label:"商品分类",icon:"el-icon-user",link:"/list/mall-category"},{label:"商品管理",icon:"el-icon-user",link:"/list/mall-goods"},{label:"订单管理",icon:"el-icon-user",link:"/list/mall-order"}]},{label:"积分竞拍",icon:"el-icon-user",children:[{label:"竞拍中心",icon:"el-icon-user",link:"/list/auction-center"},{label:"竞拍交易",icon:"el-icon-user",link:"/list/auction-trade"}]},{label:"快递物流",icon:"el-icon-user",link:"/list/courier"}];var d=e({setup(){},data:()=>({account:"",pwd:""}),methods:{logon(){this.$http.post("/logon",{}).then((e=>{this.$notify.success(e.message),sessionStorage.setItem("baseURL",e.data.baseURL),sessionStorage.setItem("menu",JSON.stringify(e.data.menu)),sessionStorage.setItem("frame",JSON.stringify(e.data.frame)),this.$router.replace(u[0].link)})).catch((e=>this.$message.error(e.message)))}}});l("data-v-7db9f4e8");const m={id:"logon-page"},b={class:"logon"},k=a("div",{class:"title"},"登陆",-1),p={class:"form"},h={class:"item"},g={class:"item"},f={class:"item"},v=r("登陆");i(),d.render=function(e,l,i,r,u,d){const V=s("el-input"),w=s("el-button");return n(),o("div",m,[a("div",b,[k,a("div",p,[a("div",h,[c(V,{modelValue:e.account,"onUpdate:modelValue":l[0]||(l[0]=l=>e.account=l),placeholder:"账户名"},null,8,["modelValue"])]),a("div",g,[c(V,{modelValue:e.pwd,"onUpdate:modelValue":l[1]||(l[1]=l=>e.pwd=l),placeholder:"密码"},null,8,["modelValue"])]),a("div",f,[c(w,{onClick:e.logon},{default:t((()=>[v])),_:1},8,["onClick"])])])])])},d.__scopeId="data-v-7db9f4e8";export{d as default};
