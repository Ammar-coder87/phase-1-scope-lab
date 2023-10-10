// Write your solution in this file!

var customerName = "bob";

function upperCaseCustomerName() {
customerName = customerName.toUpperCase();
return console.log(customerName);
}
//upperCaseCustomerName();




function setBestCustomer() {
    bestCustomer = 'not bob';
    
    return console.log(bestCustomer);
}

//setBestCustomer();
//var bestCustomer = "not bob";


function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
    return console.log(bestCustomer);
}
//overwriteBestCustomer();

const leastFavoriteCustomer = "initValue";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "nextValue";
    return leastFavoriteCustomer;
}
//console.log(changeLeastFavoriteCustomer());