const printN = require("./printN/printN")
const anonymizeInput = require('./anonymizeInput/anonymizeInput')


// printN("bottle", 4);
// // le
// // le
// // le
// // le
// printN("ship", 1)
// // sh
// printN("oh", 4)
// // oh
// // oh
// // oh
// // oh
// printN("!", 5)

anonymizeInput("he sees ghosts");
// **********osts
anonymizeInput("roses are red")
// ********* red
anonymizeInput("-_-")
// -_-