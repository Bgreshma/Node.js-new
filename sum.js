var a = 5;
var b = 5;
console.log(a+b);


console.log("hello Everyone");
function sum(num1,num2) {
return (num1 + num2);
}
 console.log(sum(10,5));
 const os = require("os");
 //arrow function
 const sum = (num1, num2) => num1 + num2;
 console.log("Free memory", os.freemem()/1024/1024/1024);
 console.log("Total memory",os.totalmem()/1024/1024/1024);
 console.log("Version",os.version());
 console.log("Processor",os.cpus());
 console.log("platform", os.platform());
 console.log("Arch", os.arch());
 console.log("Uptime", os.uptime());
 console.log("UserInfo" , os.userInfo());