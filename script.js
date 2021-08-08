let BillAmount = document.querySelector("#BillAmount");
let TipPercentage = document.querySelector("#TipPercentage");
let TipAmount = document.querySelector("#TipAmount");
let Total = document.querySelector("#Total");

let calculate = () =>{
TipAmount.value = (BillAmount.value/100 * TipPercentage.value);
Total.value = eval(BillAmount.value +"+"+ TipAmount.value);

TipAmount.value = "₹" + TipAmount.value;
Total.value = "₹" + Total.value;


}
