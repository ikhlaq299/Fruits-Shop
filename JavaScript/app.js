var userInput = Number(prompt("Enter the Amount"));
var amount = document.getElementById("amount");
var minus = document.getElementById("minus");
var count = document.getElementById("count");
var plus = document.getElementById("plus");
var counting = 0;
var minus1 = document.getElementById("minus1");
var count1 = document.getElementById("count1");
var plus1 = document.getElementById("plus1");
var counting1 = 0;
var minus2 = document.getElementById("minus2");
var count2 = document.getElementById("count2");
var plus2 = document.getElementById("plus2");
var counting2 = 0;
var minus3 = document.getElementById("minus3");
var count3 = document.getElementById("count3");
var plus3 = document.getElementById("plus3");
var counting3 = 0;
var orangePrice = document.getElementById("orangePrice");
var total = 0;
var total1 = 0;
var total2 = 0;
var total3 = 0;
var totalAmount = document.getElementById("totalAmount");
var allTotal = 0;

amount.innerHTML = userInput;
minus.addEventListener("click", () => {
  if (counting > 0) {
    counting--;
    count.innerHTML = counting;
    total -= 10;
    allTotal = total + total1 + total2 + total3;
    totalAmount.innerHTML = allTotal;
    // console.log(allTotal=total+total1+total2+"all total");
    // console.log(counting+"counting++");
    // console.log(total+"total++");
  }
});
plus.addEventListener("click", () => {
  counting++;
  count.innerHTML = counting;
  total += 10;
  allTotal = total + total1 + total2 + total3;
  totalAmount.innerHTML = allTotal;
  // console.log(allTotal=total+total1+total2+"all total");
  // console.log(counting+"counting--");
  // console.log(total+"total--");
  // console.log(totalAmount.innerHTML+"alltotal")
  // console.log(amount.innerHTML+"amount")
});
minus1.addEventListener("click", () => {
  if (counting1 > 0) {
    counting1--;
    count1.innerHTML = counting1;
    total1 -= 20;
    allTotal = total + total1 + total2 + total3;
    totalAmount.innerHTML = allTotal;
  }
});
plus1.addEventListener("click", () => {
  counting1++;
  count1.innerHTML = counting1;
  total1 += 20;
  allTotal = total + total1 + total2 +total3;
  totalAmount.innerHTML = allTotal;
});
minus2.addEventListener("click", () => {
  if (counting2 > 0) {
    counting2--;
    count2.innerHTML = counting2;
    total2 -= 30;
    allTotal = total + total1 + total2 + total3;
    totalAmount.innerHTML = allTotal;
  }
});
plus2.addEventListener("click", () => {
  counting2++;
  count2.innerHTML = counting2;
  total2 += 30;
  allTotal = total + total1 + total2 + total3;
  totalAmount.innerHTML = allTotal;
});
minus3.addEventListener("click", () => {
  if (counting3 > 0) {
    counting3--;
    count3.innerHTML = counting3;
    total3 -= 40;
    allTotal = total + total1 + total2 +total3;
    totalAmount.innerHTML = allTotal;
  }
});
plus3.addEventListener("click", () => {
  counting3++;
  count3.innerHTML = counting3;
  total3 += 40;
  allTotal = total + total1 + total2+total3;
  totalAmount.innerHTML = allTotal;
});

