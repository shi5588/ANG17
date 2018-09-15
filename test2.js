var bigInt = require("big-integer");

// 只能支持到16位长 9007199254740992
console.log(bigInt("9007199254740392").add(10));