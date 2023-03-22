const anonymizeInput = (str) => {
    txt = ''
    if(str.length > 4) {
        for (let i = 0; i < str.length; i++) {
            // console.log(i, str[i], str.length - 4, txt)
            i < str.length - 4 ?
            txt += str[i].replace(str[i], '*') :
            txt += str[i]
        }
    } else {
        txt += str
    }
    console.log(txt)
}

module.exports = anonymizeInput;