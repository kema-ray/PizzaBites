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
        let topping_value = ptopping.length;
        console.log("toppings value" + topping_value);

        if((psize == "0") && (pcrust == "0")){
            console.log("nothing selected");
            $("button-order").show();
            $("#details").show();
            $("div.choice").hide();
            alert("Please select pizza size and crust");
        }
        else {
            $("button-order").hide();
            $("#details").hide();
            $("div.choice").slideDown(1000);
        }
        total = price + crust_price + topping_value;
        console.log(total);
        let checkoutTotal =0;
        checkoutTotal = checkoutTotal + total;

        $("#pizzasize").html($("#size option:selected").val());
            $("#pizzaname").html($(".name option:selected").val());
            $("#pizzacrust").html($("#crust option:selected").val());
            $("#pizzatoppings").html(ptopping.join(", "));
            $("totals").html(total);

            // Add pizza button
            $("button.addPizza").click(function(){
                let psize = (".size option:selected").val();
                let pname = (".name option:selected").val();
                let pcrust = (".#crust option:selected").val();
                let ptopping = []
                $.each($("input[name='toppings']:checked"), function(){
                    ptopping.push($(this).val());
                });
                console.log(ptopping.join(", "));

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
                let topping_value = ptopping.length;
                console.log("toppings value" + topping_value);
                total = price + crust_price + topping_value;
                    console.log(total);

                    checkoutTotal = checkoutTotal + total;
                    console.log(checkoutTotal);
                
                    var newOrder = new Getpizza(psize,pname,pcrust,ptoppings,total);
                    $("#ordersmade").append('<tr><td id "pizzasize">'+newOrder.size + '</td><td id="pizzaname">' + newOrder.name + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatoppings">'+newOrder.toppings+'</td><td id="totals">'+newOrder.total+'</td></tr>');
                    console.log(newOrder);
                    
                    $("button#checkout").click(function(){
                        $("button#checkout").hide();
                        $("button.addPizza").hide();
                        $("button.deliver").slideDown();
                        $("#addedprice").slideDown(1000);
                        console.log("Your total bill is sh. "+checkoutTotal);
                        $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
                    });   
            });













        event.preventDefault();
    });
});