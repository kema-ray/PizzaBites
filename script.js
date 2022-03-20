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
$(document).ready(function(){
    $("button.order").click(function(event){
        let psize = $("#size option:selected").val();
        let pname = $(".name option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = [];
        $.each($("input[name='toppings']:checked"), function(){
            ptopping.push($(this).val());
        });
        console.log(ptoppping.join(", "));
    });
});