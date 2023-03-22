// if number N is even => two last characteres 
// if number N is odd => two first characteres
// if string > 2

const printN = (str, number) => {
    if(str.length < 2) {
        return
    } else {
        for(let i = 0; i < number; i++) {
            if(number % 2 == 0) {
                console.log(str.slice(-2))
            } else if (number % 2 == 1){
                console.log(str.slice(0, 2))
            }
        }
    }
}


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

module.exports = printN;