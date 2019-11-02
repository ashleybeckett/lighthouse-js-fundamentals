const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("Ingredients are: ");
let i = 0;
while (i < ingredients.length){
  console.log(ingredients[i]);
i++;
}
// Write a for loop that prints out the contents of ingredients:
for(i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

var rvIng = ingredients.slice(0).reverse();

for (var n = 0, rv= rvIng.length; n < rv; n++) {
    var reversed = rvIng[n];
    console.log(reversed);
}