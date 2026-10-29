let balance = 50000;
let withdrawAmount = 5000;

if (withdrawAmount <= balance) {
    balance = balance - withdrawAmount;
    console.log("Paise nikal gaye: " + withdrawAmount);
    console.log("Bacha hua balance: " + balance);
} else {
    console.log("Balance kam hai!");
}
