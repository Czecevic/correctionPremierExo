# correctionPremierExo

## Base #1 - Premiers concepts 
lien vers l'exercice => https://rbean.matrice.io/projects/bases-1-premiers-concepts/sessions/1072
### exercice 1 - première ligne de code
```
console.log("I'm ready 2 learn more!")
```

### exercice 2 - les variables
```
let message = "I love variables";
console.log(message);
```

### exercice 3 - Les opérations
```
const message = "Je m'appelle ";
const name = "Groot";

console.log(name + message);
```
### exercice 4 - Les opérations logique
```
console.log(10 < 1)
```
### exercice 5 - Avec des si on refait le monde
```
const n = 33;
if (n === 33) {
    console.log("806 !");
}
```
### exercice 6 - et sinon ? 
```
if (1 == 3) {
    console.log("One");
} else if (2 == 3) {
    console.log("Two");
} else if (3 == 3) {
    console.log("Three");
} else {
    console.log("Four");
}
```

## Base #2 - Fonction

lien vers les exercices => https://rbean.matrice.io/projects/bases-2-fonctions/sessions/1073/subject?part=1-fonctions-sans-argument

### exercice 1 - Première ligne de code
```
function printMessage() {
    console.log("I am excited to code!")
}

module.exports = printMessage;
```
### exercice 2 - Les variables
##### première option
```
function repeatArg(str) {
    console.log(str);
    console.log(str);
}

module.exports = repeatArg;
```
##### deuxième option
```
function repeatArg(str) {
    console.log(`${str} \n${str}`);
}
```
le "\n" permet de fournir ici un saut à la ligne ce qui nous évite une répetition du console.log

### exercice 3 - exercice
##### première option
```
function printWeather(number) {
    if (number < 10) {
        console.log("It's freaking cold!")
    } else if (number >= 10 && number <= 30) {
        console.log("It's about right")
    } else {
        console.log("It's too hot ")
    }
}
```
###### deuxième option
```
function printWeather(number) {
    number < 10 ? console.log("It's freaking cold!") : 
    number >= 10 && number <= 30 ? console.log("It's about right") :
    console.log("It's too hot ")
}
```
ici nous utilisons le ternaire pour vérifier la température, 
le "?" serait un équivalent de "si la condition est remplit alors"
le ":" serait un équivalent de "sinon"

### exercice 4 - Fonctions avec plusieurs ar
##### première option
```

```

ce que Rbean utilise pour tester votre code (si vous souhaitez le faire je vous invite à créer un nouveau dossier contenant l'ensemble des appelles d'exercices)
```
const printMessage = require('./printMessage.js');
const repeatArg = require('./repeatArg.js');
const printWeather = require('./printWeather.js');

printMessage()

repeatArg(33)
repeatArg('hello again')

printWeather(-10)
printWeather(54)
printWeather(15)
```