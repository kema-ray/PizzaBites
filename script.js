var price;
var topping_price;
var crust_price;

let totals = 0;

function Getpizza (size,name,crust,toppings,totals){
    this.size = size;
    this.name = name;
    this.crust = crust;
    this.toppings = toppings;
    this.totals = totals;
}