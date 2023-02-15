let userAccount = 100;
let payment = 100;
let deliverySms = "A001DFX0";
let userSms = "A001DFX0";
function deliveryFinished(userAccount, payment, deliverySms, userSms) {
if (deliverySms === userSms) {
userAccount -= payment;
    console.log(`Вы получили посылку из ячейки 4 и ваш счет составляет: ${userAccount}  р.`)
}  
else {
    console.log("Что-то пошло не так...")
}
}

deliveryFinished(userAccount, payment, deliverySms, userSms)