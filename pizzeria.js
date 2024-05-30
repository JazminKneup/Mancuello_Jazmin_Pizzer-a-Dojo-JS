function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}

//Crear pizzas Especificas
// Pizza estilo Chicago
var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);

// Pizza lanzada a mano
var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);

// Pizza de pollo
var pizza3 = pizzaOven("gruesa", "barbacoa", ["cheddar", "mozzarella"], ["pollo", "pimientos", "cebollas"]);
console.log(pizza3);

// Pizza hawaiana
var pizza4 = pizzaOven("delgada", "pesto", ["parmesano", "mozzarella"], ["jamón", "piña", "albahaca"]);
console.log(pizza4);

var tiposCorteza = ["estilo Chicago", "lanzada a mano", "gruesa", "delgada"];
var tiposSalsa = ["tradicional", "marinara", "barbacoa", "pesto"];
var tiposQuesos = [["mozzarella"], ["mozzarella", "feta"], ["cheddar", "mozzarella"], ["parmesano", "mozzarella"]];
var tiposSalsas = [["pepperoni", "salchicha"], ["champiñones", "aceitunas", "cebollas"], ["pollo", "pimientos", "cebollas"], ["jamón", "piña", "albahaca"]];

function randomPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomPizza() {
    return pizzaOven(randomPick(tiposCorteza), randomPick(tiposSalsa), randomPick(tiposQuesos), randomPick(tiposSalsas));
}

var pizzaAleatoria1 = randomPizza();
console.log(pizzaAleatoria1);

var pizzaAleatoria2 = randomPizza();
console.log(pizzaAleatoria2);

