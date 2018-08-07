//declaring the basket object, defining properties and subproperties of the basket
var basket= {
  apple: {
    color: "red",
    weight: 70,
    Price: 2,
    Brand: "Rene's",
    quantity: 1,
  },
  banana:{
    color:"yellow",
    weight: 100,
    Price: 1,
    Brand: "Kite",
    quantity: 1,
  },
  brownie:{
    color: "Brown",
    weight: 50,
    Price: 3,
    Brand: "bei Mama's",
    quantity: 90
  },
}

var getSumTotal = function(basket){
  var sumTotal=0

  //iterating the basket object

  for(var item in basket){

  //adding the price of the item multiplied by quantity (+= to add over it what we already calculated from befofer)

  sumTotal += basket[item].Price * basket[item].quantity

  }

  return sumTotal

}

var getSumTotalDiscounted = function(sumTotal){
  var sumTotalDiscounted=0

  //declaring the IF clause for the basket, giving discount depending on the sumTotal of the basket

  if (sumTotal >= 200){
    sumTotalDiscounted = sumTotal * 0.8
  }
  else if (sumTotal >= 100 && sumTotal<200) {
    sumTotalDiscounted=sumTotal * 0.90
  }
  else if (sumTotal>=50 && sumTotal<100){
    sumTotalDiscounted=sumTotal * 0.95
  }
  else {sumTotalDiscounted=sumTotal}

  return sumTotalDiscounted
}

console.log(

"Der normaler Preis ist " + getSumTotal(basket) + " Euro.",
"Sie haben ein Rabatt von " + (getSumTotal(basket) - getSumTotalDiscounted(getSumTotal(basket))) + " Euro.",
"Der Endpreis beträgt " + (getSumTotalDiscounted(getSumTotal(basket))) + " Euro.",

)
