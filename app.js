var int = document.getElementById("initialPrice");
var stockq = document.getElementById("stockQuantity");
var currp = document.getElementById("currentPrice");
var button = document.getElementById('button');
var output = document.getElementById('output');

button.addEventListener('click',passvalues)

function passvalues(){
    var initial = int.value;
    var quantity = stockq.value;
    var current = currp.value;
    calculateprofitandloss(initial,quantity,current)
}
function calculateprofitandloss(int,stockq,currp) {
    if(int > currp){
        var loss = (int-currp)*stockq;
        var losspercentage = (loss/int)* 100;
        display(`Total loss is ${loss} & loss percentage is ${losspercentage}`)
    }else if(currp > int){
        var profit = (currp - int)*stockq;
        var profitpercentage = (profit/int)*100;
        display(`Total profit is ${profit} & profit percentage is ${profitpercentage}`)
    }else{
        display('!NoLoss !NoPain')
    }
}
function display(message) {
    output.innerText = message;
}