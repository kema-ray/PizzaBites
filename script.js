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

        switch(pcrust) {
            case "0":
                crust_price = 0;
                break;
                case "Cheese-stuffed":
                    crust_price = 250;
                    break;
                    case "Crispy":
                        crust_price = 180;
                        break;
                        case "Gluten-free":
                            crust_price = 200;
                            break;
                            default:
                                console.log("No price");
        }
        switch(psize) {
            case "0":
                price = 0;
                break;
                case "small":
                    price = 700;
                    console.log(price);
                    break;
                    case "medium":
                        price = 850;
                        console.log(price);
                        break;
                        case "large":
                            price = 1000;
                            console.log(price);
                            break;
                            default:
                                console.log("fail");
        }
        event.preventDefault();
    });
});