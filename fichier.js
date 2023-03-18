const excludeElements = (tab) => {
  for (const element in tab) {
    if (!(element == 0 && element == tab.length - 1)) {
      console.log(tab[element]);
    }
  }
};

console.log(
  excludeElements(["salad", "tomato", "samurai sauce", "onion", "meat"])
);
