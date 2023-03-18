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
const printFullName = (surname, firstname, lastname) => {
  console.log(surname + " " + firstname + " " + lastname);
};
```

##### deuxième option

```
const printFullName = (surname, firstname, lastname) => {
  console.log(`${surname} ${firstname} ${lastname}`);
};
```

### exercice 5 - exercice

##### première option

```
const addOrMult = (operator, number1, number2) => {
  if (operator === "+") {
    console.log(number1 + number2);
  } else if (operator === "*") {
    console.log(number1 * number2);
  }
};
```

##### demière option

```
const addOrMult = (operator, number1, number2) => {
  operator === "+"
    ? console.log(number1 + number2)
    : operator === "*"
    ? console.log(number1 * number2)
    : null;
};
```

### exercice 6 - retour d'une fonction

##### première option

```
const ageOfMajority = (pays) => {
  if (pays == "USA") return true;
  return false;
};
```

##### deuxième option

```
const ageOfMajority = (pays) => {
  return pays == "USA" ? true : false;
};
```

### Exercice 7 - exercice

##### première option

```
const between0And100 = (number) => {
  if (number > 100) {
    return 100;
  } else if (number < 0) {
    return 0;
  } else {
    return number;
  }
};
```

##### deuxième option

```
const between0And100 = (number) => {
  return number > 100 ? 100 : number < 0 ? 0 : number;
};
```

ce que Rbean utilise pour tester votre code (si vous souhaitez le faire je vous invite à créer un nouveau dossier contenant l'ensemble des appelles d'exercices)

```
const printMessage = require('./printMessage.js');
const repeatArg = require('./repeatArg.js');
const printWeather = require('./printWeather.js');
const printFullName = require('./printFullName.js');
const addOrMult = require('./addOrMult.js');
const ageOfMajority = require('./ageOfMajority.js');


printMessage()

repeatArg(33)
repeatArg('hello again')

printWeather(-10)
printWeather(54)
printWeather(15)

printFullName("Walter", "Bruce", "Willis");
printFullName("James", "Paul", "McCartney");

addOrMult("+", 10, 5)
addOrMult("-", 20, 2)
addOrMult("*", 20, 2)

console.log(ageOfMajority("USA"));
console.log(ageOfMajority("france"));

```

## Base #3 - Itération et collections

lien vers l'exercice => https://rbean.matrice.io/projects/bases-3-iterations-et-collections/sessions/1074/subject

### exercice 1 - Les boucles for

##### première option

```
for (let i = 1; i < 11; i++) {
  console.log(i);
}

```

##### deuxième option

```
let i = 1;
while (i <= 10) {
  console.log(i++);
}

```

### exercice 2 - exercice

##### première option

```
const displayN = (number) => {
  for (let i = 0; i <= number; i++) {
    console.log(i);
  }
};
```

##### deuxième option

```
const displayN = (number) => {
  let i = 0;
  while (i <= number) {
    console.log(i++);
  }
};
```

### execice 3 - execice

##### première option

```
const displayN = (number) => {
  for (let i = 0; i <= number; i += 2) {
    console.log(i);
  }
};
```

##### deuxième option

```
const displayN = (number) => {
  let i = 0;
  while (i <= number) {
    console.log(i);
    i += 2;
  }
};
```

### execice 4 - usage : compteur

##### première option

```
const displayNTimes = (number, word) => {
  for (let i = 0; i < number; i++) {
    console.log(`${word}`);
  }
};
```

##### deuxième option

```
const displayNTimes = (number, word) => {
  let i = 0;
  while (i < number) {
    console.log(`${word}`);
    i++;
  }
};
```

### exercice 5 - boucle avec while

##### première option

```
const countdown = (number) => {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
};
```

##### deuxième option

```
const countdown = (number) => {
  let i = number;
  while (i >= 0) {
    console.log(i--);
  }
};
```

### exercice 6 - exercice

##### première option

```
const birthdaySong = (name, number) => {
  for (let i = 0; i < number; i++) {
    if (i % 3 == 2) {
      console.log("Happy birthday", name);
    } else {
      console.log("Happy birthday");
    }
  }
};
```

##### deuxième option

```
const birthdaySong = (name, number) => {
  for (let i = 0; i < number; i++) {
    i % 3 == 2
      ? console.log("Happy birthday", name)
      : console.log("Happy birthday");
  }
};
```

##### troisème option

```
const birthdaySong = (name, number) => {
  let i = 0;
  while (i < number) {
    i % 3 == 2
      ? console.log("Happy birthday", name)
      : console.log("Happy birthday");
    i++;
  }
};
```

### exercice 1 - intro aux arrays

```
const getThirdElement = (tab) => {
  return(tab[2]);
};
```

### exercice 2 - exercice

```
const getNthElement = (tab, numb) => {
  return(tab[numb]);
};
```

### exercice 3 - itérer sur un array

##### première option

```
const checkPresence = (tab, word) => {
  for (const elem of tab) {
    if (elem === word) {
      return true;
    }
  }
  return false;
};
```

##### deuxième option

```
const checkPresence = (tab, word) => {
  return tab.includes(word);
};
```

### exercice 4 - for ... of

##### première option

```
const countOccurences = (tab, word) => {
  let count = 0;
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] === word) {
      count += 1;
    }
  }
  return count;
};
```

##### deuxième option

```
const countOccurences = (tab, word) => {
  return tab.reduce((count, element) => {
    return element === word ? count + 1 : count;
  }, 0);
};
```

### exercice 5 - methodes courantes

##### première option

```
const excludeElements = (tab) => {
  return tab.slice(1, -1);
};
```

##### deuxième option

```
const countOccurences = (tab, word) => {
  return tab.reduce((count, element) => {
    return element === word ? count + 1 : count;
  }, 0);
};
```

### exercice 6 - exercice

##### première option

```
const addIfNew = (tab, numb) => {
  let verif = false;
  for (const elem in tab) {
    if (tab[elem] == numb) {
      verif = true;
    }
  }
  if (verif == false) {
    tab.push(numb);
  }
  return tab;
};
```

##### deuxième option

```
const addIfNew = (tab, numb) => {
  if (!tab.includes(numb)) {
    tab.push(numb);
  }
  return tab;
};
```

## Base #4 - Hash

lien vers l'exercice => https://rbean.matrice.io/projects/bases-4-hashes/sessions/1075/subject

### exercice 1 - createweekHash

##### première option

```
const creatWeekHash = () => {
    const week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const days = {};
    for ( const day of Week) {
        days[day] = 0;
        }
        return days;
}
```

##### deuxième option

```
const createWeekHash = () => {
  let week = {
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0,
  };

  return week;
}

```

### exercice 2 - displayHash

##### première option

```
const displayDict = (obj) => {
  for (const key in obj) {
    console.log(key + " => " + obj[key]);
  }
};

displayDict({
  "Jacksons 5": 5,
  Beatles: 4,
  "Rolling Stones": 5,
  "Spice Girls": 5,
});
```

##### deuxième option

```
const displayDict = (obj) => {
  for (const key in obj) {
    console.log(`${key} => ${obj[key]}`);
  }
};

displayDict({
  "Jacksons 5": 5,
  Beatles: 4,
  "Rolling Stones": 5,
  "Spice Girls": 5,
});
```

### exercice 3 - findValue

##### première option

```
const findValue = (obj, name) => {
  for (const key in obj) {
    if (key == name) {
      return obj[key];
    }
  }
  return undefined;
};

console.log(
  findValue(
    {
      Obama: 1961,
      JFK: 1917,
      Trump: 1946,
      Clinton: 1946,
    },
    "JFK"
  )
);
console.log(
  findValue(
    {
      Obama: 1961,
      JFK: 1917,
      Trump: 1946,
      Clinton: 1946,
    },
    "Nixon"
  )
);
```

##### deuxième option

```
const findValue = (obj, name) => {
  if (name in obj) return obj[name];
};

console.log(
  findValue(
    {
      Obama: 1961,
      JFK: 1917,
      Trump: 1946,
      Clinton: 1946,
    },
    "JFK"
  )
);
console.log(
  findValue(
    {
      Obama: 1961,
      JFK: 1917,
      Trump: 1946,
      Clinton: 1946,
    },
    "Nixon"
  )
);
```

### exercice 4 - updateValue

```
const updateValue = (obj, key, value) => {
  obj[key] = value;
  console.log(obj);
};

updateValue({ Bread: 1, Salad: 1, Tomato: 2, Onion: 0 }, "Onion", 3);
updateValue({ Bread: 1, Salad: 1, Tomato: 2 }, "Mayonnaise", 1);

```

### exercice 5 - findValue

##### première option

```
const findValues = (obj, tab) => {
  let newTab = [];
  tab.forEach((key) => {
    newTab.push(obj[key]);
  });
  return newTab;
};

console.log(
  findValues(
    {
      Obama: 1961,
      JFK: 1917,
      Trump: 1946,
      Clinton: 1946,
    },
    ["JFK", "Nixon", "Obama"]
  )
);
```

##### deuxième option

```
const findValues = (obj, keys) => {
  return keys.map((key) =>
    Object.keys(obj).includes(key) ? obj[key] : undefined
  );
}

console.log(
  findValues(
    {
      Obama: 1961,
      JFK: 1917,
      Trump: 1946,
      Clinton: 1946,
    },
    ["JFK", "Nixon", "Obama"]
  )
);

```

### exercice 6 - completeweekHash

##### première option

```
const completeWeekHash = (obj) => {
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  for (const day of days) {
    if (obj[day] == undefined) {
      obj[day] = 0;
    }
  }
  return obj;
};

completeWeekHash({
  monday: 1,
  tuesday: 7,
  saturday: 8,
  sunday: -7,
});
```

##### deuxième option

```
const completeWeekHash = (obj) => {
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  for (const day of days) {
    if (!Object.keys(obj).includes(day)) {
      obj[day] = 0;
    }
  }
  return obj;
};

completeWeekHash({
  monday: 1,
  tuesday: 7,
  saturday: 8,
  sunday: -7,
});

```

### Base #5 - Strings

lien vers l'exercice => https://rbean.matrice.io/projects/bases-5-strings/sessions/1076/subject

### exercice 1 - printLetters

##### première option

```
const printLetters = (strings) => {
  for (let i = 0; i < strings.length; i++) {
    console.log(strings[i]);
  }
};

printLetters("Hello World!");

```

##### deuxième option

```
const printLetters = (strings) => {
  for (const string of strings) {
    console.log(string);
  }
};

printLetters("Hello World!");
```

### exercice 2 - printNoVowels

##### première option

```
const printNoVowels = (strings) => {
  for (const string of strings) {
    if (
      string != "a" &&
      string != "e" &&
      string != "i" &&
      string != "o" &&
      string != "u"
    ) {
      console.log(string);
    }
  }
};

printNoVowels("it's a new day!");


```

##### deuxième option

```
const printNoVowels = (strings) => {
  const tab = ["a", "e", "i", "o", "u"];
  for (const string of strings) {
    if (!tab.includes(string)) {
      console.log(string);
    }
  }
};

printNoVowels("it's a new day!");
```

### exercice 3 - echoEnd

```
const echoEnd = (strings) => {
  console.log(strings.slice(-5));
};

echoEnd("I love kangaroos");


```

### exercice 4 - ingly

##### première option

```
const ingly = (str) => {
  if (str.slice(-3) == "ing") {
    console.log(str + "ly");
  } else {
    console.log(str + "ing");
  }
};

ingly("talk");
ingly("ing");
ingly("mind-blowing");
```

##### deuxième option

```
const ingly = (str) => {
  if (str.endsWith("ing")) {
    console.log(str + "ly");
  } else {
    console.log(str + "ing");
  }
};

ingly("talk");
ingly("ing");
ingly("mind-blowing");
```

### exercice 5 - echoEnd

##### première option

```
const ingly = (str) => {
  if (str.slice(-3) == "ing") {
    console.log(str + "ly");
  } else {
    console.log(str + "ing");
  }
};

ingly("talk");
ingly("ing");
ingly("mind-blowing");
```

##### deuxième option

```
const ingly = (str) => {
  if (str.endsWith("ing")) {
    console.log(str + "ly");
  } else {
    console.log(str + "ing");
  }
};

ingly("talk");
ingly("ing");
ingly("mind-blowing");
```

### exercice 6 - upperInputEnd

```
const upperInputEnd = (str) => {
  console.log(str.slice(0, -1) + str.slice(-1).toUpperCase());
};

upperInputEnd("the floor is lava");
upperInputEnd("sure!");
```
