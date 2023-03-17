function printWeather(number) {
    number < 10 ? console.log("It's freaking cold!") : 
    number >= 10 && number <= 30 ? console.log("It's about right") :
    console.log("It's too hot ")
}
printWeather(-10)
printWeather(54)
printWeather(15)