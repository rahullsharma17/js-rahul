const accountId = 2861
let accountEmail = "rs286100@gmai.com"
var accountPassword = "12345"
accountCity = "haryana"
let accountState

// accountId = 2 ( not allowed )

console.log(accountId);
accountEmail = "hahaha@gmail.com"
accountPassword = "23414"
accountCity = "jaipur"


/*
prefer not to use var because of issue in block and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])