const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    EAT:  Symbol("eat"),
    OUTSIDE: Symbol("outside"),
    FOOD_TYPE: Symbol("foodtype"),
    DECIDE: Symbol("decide"),
    PIZZA: Symbol("pizza"),
    BURGER: Symbol("burger"),
    LARGE: Symbol("large"),
    SMALL: Symbol("small"),
    NONVEG:Symbol("nonveg"),
    VEG : Symbol("veg"),
    CARD: Symbol("card"),
    CASH: Symbol("cash"),
    PAY: Symbol("pay"),
    CREDIT: Symbol("credit"),
    DEBIT: Symbol("debit"),
    PAYMENT: Symbol("payment"),
    DINNER:Symbol("dinner"),
    LTOPPINGS: Symbol("largetoppings"),
    STOPPINGS: Symbol("smalltoppings"),
    CREAM: Symbol("cream"),
    SAUCE: Symbol("sauce"),
    JUICE:Symbol("juice"),
    SOFT: Symbol("soft")
    

});

var largepizza = 25;  //Declare variables for showing the prices of items.
var smallpizza = 15;
var nonvegb = 10;
var vegb = 5;
var mangojuice = 8;
var applejuice = 10;
var onion = 4;
var greenp = 6;
var cream = 3;
var bbqs = 4;
var icecr = 5;
var coke = 2;
var canadadry = 3;
var Price = 0;

export default class Game{ 
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "It is a lunch time. Do you want to eat something? Yes Or No";
                this.stateCur = GameState.EAT;
                break;
            case GameState.EAT:
                if(sInput.toLowerCase().match("no")){
                    sReply = "After that, you can't eat anything until dinner. you still don't want to eat?";
                }else if (sInput.toLowerCase().match("yes")) {
                    sReply ="You didn't bring anything with you from home to eat. Do you want to go somewhere to eat? Go or Stay";
                    this.stateCur = GameState.OUTSIDE;
                }else{
                    sReply="Please enter right input! Yes or No";  
                    this.stateCur=GameState.EAT;
                }
                break;
            case GameState.OUTSIDE:
                if(sInput.toLowerCase().match("go")){
                    sReply = "There are three shops. Pizza Shop, Burger Shop, and Drink Shop. What do you want to eat/Drink? Pizza or Burger or Drink"
                    this.stateCur = GameState.FOOD_TYPE;
                }else if(sInput.toLowerCase().match("stay")){
                    sReply = "After that, you can't eat anything until dinner. You still do not want anything to eat?";
                    this.stateCur = GameState.DECIDE;

                }else{
                    sReply="Please enter Correct input! Go or Stay";
                    this.stateCur=GameState.OUTSIDE;
                }
                break;
            case GameState.FOOD_TYPE:
                if(sInput.toLowerCase().match("pizza")){
                    sReply = "Pizza Shop has two pizza in a menu. Which one do you want to order? Large or Small";
                    this.stateCur = GameState.PIZZA;

                }else if (sInput.toLowerCase().match("burger")){
                    sReply = "Burger shop has two burgers in a menu. Which one do you want to order? Nonveg or veg";
                    this.stateCur = GameState.BURGER;
    
                }else if (sInput.toLowerCase().match("drink")){

                    sReply="Drink shop has two items in menu. Which one you want to order? Juice or SoftDrink";
                    this.stateCur=GameState.DRINKS;
                }
                else{
                    sReply="Please enter Correct input! Pizza or Burger or Drink";
                    this.stateCur=GameState.FOOD_TYPE;
                }
                break;
            case GameState.PIZZA:
                if(sInput.toLowerCase().match("large")){
                    sReply = `Simple large Pizza Price is $${largepizza}. Do you want to add any toppings? Onion $${onion} or Green Peppers $${greenp}`;
                    this.stateCur = GameState.LTOPPINGS;

                }else if(sInput.toLowerCase().match("small")){
                    sReply =`Simple small Pizza Price is $${smallpizza}. Do you want to add any toppings? Onion $${onion} or Green Peppers $${greenp}`;
                    this.stateCur = GameState.STOPPINGS;
    
                }
                else{
                    sReply="Please enter Correct input! Large or Small";
                    this.stateCur=GameState.PIZZA;
                }
                break;
            case GameState.LTOPPINGS:
                if(sInput.toLowerCase().match("onion")){
                    Price = largepizza + onion;
                    sReply = `Onion is added in your pizza. Now your bill is $${Price}. How would you like to pay? Cash or Card. `;
                    this.stateCur = GameState.PAY;

                }else if(sInput.toLowerCase().match("green peppers")){
                    Price = largepizza + greenp;
                    sReply =`Green Peppers is added in your pizza. Now your bill is $${Price}. How would you like to pay? Cash or Card.`;
                    this.stateCur = GameState.PAY;
    
                }else{
                    sReply="Please enter Correct input! Onion or Green Peppers";
                    this.stateCur=GameState.LTOPPINGS;
                }
                break;
            case GameState.STOPPINGS:
                if(sInput.toLowerCase().match("onion")){
                    Price = smallpizza + onion;
                    sReply = `Onion is added in your pizza. Now your bill is $${Price}. How would you like to pay? Cash or Card. `;
                    this.stateCur = GameState.PAY;

                }else if(sInput.toLowerCase().match("green peppers")){
                    Price = smallpizza + greenp;
                    sReply =`Green Peppers is added in your pizza. Now your bill is $${Price}. How would you like to pay? Cash or Card.`;
                    this.stateCur = GameState.PAY;
    
                }else{
                    sReply="Please enter Correct input! Onion or Green Peppers";
                    this.stateCur=GameState.STOPPINGS;
                }
  
                break;
            case GameState.BURGER:
                if(sInput.toLowerCase().match("nonveg")){
                    sReply = `Price of Non-Veg Burger is $${nonvegb}. Do you want to add any extra cream/sauce? cream or BBQ`;
                    this.stateCur = GameState.NONVEG;

                }else if (sInput.toLowerCase().match("veg")){
                    sReply = `Price of Veg Burger is $${vegb}. Do you want to add any extra cream/sauce? cream or BBQ`;
                    this.stateCur = GameState.VEG;
    
                }else{
                    sReply="Please enter Correct input! Nonveg or Veg";
                    this.stateCur=GameState.BURGER;
                }
                break;
            case GameState.NONVEG:
                if(sInput.toLowerCase().match("cream")){
                    Price = nonvegb + cream;
                    sReply = `Extra cream is added in your burger. Now your bill is $${Price}. How would you like to pay? Cash or Card. `;
                    this.stateCur = GameState.PAY;

                }else if(sInput.toLowerCase().match("bbq")){
                    Price = nonvegb + bbqs;
                    sReply =`Extra BBQ sauce is added in your burger. Now your bill is $${Price}. How would you like to pay? Cash or Card.`;
                    this.stateCur = GameState.PAY;
    
                }else{
                    sReply="Please enter Correct input! Cream or BBQ";
                    this.stateCur=GameState.NONVEG;
                }

                break;
            case GameState.VEG:
                if(sInput.toLowerCase().match("cream")){
                    Price = vegb + cream;
                    sReply = `Extra cream is added in your burger. Now your bill is $${Price}. How would you like to pay? Cash or Card. `;
                    this.stateCur = GameState.PAY;

                }else if(sInput.toLowerCase().match("bbq")){
                    Price = vegb + bbqs;
                    sReply =`Extra BBQ sauce is added in your burger. Now your bill is $${Price}. How would you like to pay? Cash or Card.`;
                    this.stateCur = GameState.PAY;

                }else{
                    sReply="Please enter Correct input! Cream or BBQ";
                    this.stateCur=GameState.VEG;
                }
                break;
                
            case GameState.DRINKS:
                if(sInput.toLowerCase().match("juice")){
                    sReply = "They have two types of juice. Which one do you want? Mango or Apple";
                    this.stateCur = GameState.JUICE;

                }else if(sInput.toLowerCase().match("softdrink")){
                    sReply = "They have two types of soft drinks. Which one do you want? Coke or Canada Dry";
                    this.stateCur = GameState.SOFT;
    
                }else{
                    sReply="Please enter Correct input! Juice or Softdrink";
                    this.stateCur=GameState.DRINKS;
                }

                break;
            case GameState.JUICE:
                if(sInput.toLowerCase().match("mango")){
                    sReply = `Price of Mango juice is $${mangojuice}.How do you want to pay? Cash or Card `;
                    this.stateCur = GameState.PAY;

                }else if(sInput.toLowerCase().match("apple")){
                    sReply = `Price of Apple juice is $${applejuice}.How do you want to pay? Cash or Card `;
                    this.stateCur = GameState.PAY;
    
                }else{
                    sReply="Please enter Correct input! Mango or Apple";
                    this.stateCur=GameState.JUICE;
                }
                break;
            case GameState.SOFT:
                if(sInput.toLowerCase().match("coke")){
                    sReply = `Price of Coke is $${coke}.How do you want to pay? Cash or Card `;
                    this.stateCur = GameState.PAY;

                }else if(sInput.toLowerCase().match("canadadry")){
                    sReply = `Price of Canada Dry is $${canadadry}.How do you want to pay? Cash or Card `;
                    this.stateCur = GameState.PAY;
    
                }else{
                    sReply="Please enter Correct input! Coke or Canadadry";
                    this.stateCur=GameState.SOFT;
                }
                break;
            case GameState.PAY:
                if(sInput.toLowerCase().match("card")){
                    sReply = "Debit will cost you $2 extra fees. From which card do you want to pay? Debit Or Credit";
                    this.stateCur = GameState.CARD;

                }else if(sInput.toLowerCase().match("cash")){
                    sReply = "You don't have enough cash to pay a bill.. you have to pay by card.";
                    this.stateCur = GameState.PAY;
    
                }else{
                    sReply="Please enter Correct input! Cash or Card";
                    this.stateCur=GameState.PAY;
                }
                break;
            case GameState.CARD:
                if(sInput.toLowerCase().match("credit")){
                    sReply = "Good choice! Save money is a good idea. Your payment is done. Do you want to take away any item for dinner? Yes Or no ";
                    this.stateCur = GameState.DINNER;

                }else if(sInput.toLowerCase().match("debit")){
                    sReply = "Bad choice! It cost you $2 extra. Your payment is done. Do you want to take away any item for dinner? Yes Or no";
                    this.stateCur = GameState.DINNER;
    
                }else{
                    sReply="Please enter Correct input! Credit or Debit";
                    this.stateCur=GameState.CARD;
                }
                break;
            case GameState.DINNER:
                if(sInput.toLowerCase().match("yes")){

                    sReply = "Eating same item in luch and dinner is not good. Try something new. Type Go.";
                    this.stateCur = GameState.OUTSIDE;

                }else{
                    sReply = "Ok, As you Wish. Bye" 
                    ;
                
    
                }
                break;
           
        }
        return([sReply]);
    }
}