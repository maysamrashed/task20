var exchangeForm = document.querySelector(".exchangeForm");
var data = "";
exchangeForm.onsubmit = function (e) {
    e.preventDefault();
    var element = e.target.elements;
    var amount = element[0].value;
    var coin = element[1].value;
    
    if (coin == "dollar"){
        data = 3.5 * amount;
    } else if(coin == "dinar"){
        data = 5 * amount;
    }else {
        data = amount;
    }
    document.querySelector(".result").innerHTML=data;
}
