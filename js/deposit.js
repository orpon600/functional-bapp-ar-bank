//function ar kaj gula utilities a aca

document.getElementById("btn-deposit").addEventListener("click", function () {
  /*
1. get the element by id
2. get the value from the element
3. convert string value to a number
*/
  const newDepositAmount = getInputFieldValueById("deposit-field");
  /*
    1. get previous deposit total by id
*/
  const previousDepositTotal = getTextElementValueById("deposit-total");

  //calculate new deposit total
  const newDeposittotal = previousDepositTotal + newDepositAmount;
  //set deposit total value
  setTextElementValueById("deposit-total", newDeposittotal);

  //get previous balance by using the function
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});

//DRY ---> Do not Repeat yourself
