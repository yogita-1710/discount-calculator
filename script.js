

const calculateButton = document.querySelector('#calc');
calculateButton.addEventListener('click', () => {
    var bill=document.querySelector("#billAmount").value;
    var disc = document.querySelector("#percentage").value;
    const result = (bill * (disc / 100));
    // console.log(result);
    const elementPara = document.createElement('p');
    const textNodeSquare = document.createTextNode(`${result}`)
    elementPara.style.color = 'orange';
    elementPara.appendChild(textNodeSquare)
    const squareResultElement = document.querySelector('#bottom');
    squareResultElement.appendChild(elementPara);
});
// var calcBtn = document.getElementById('calc');
// calcBtn.addEventListener('click', function () {
//     var billAmount = document.getElementById('billAmount').value;
//     var discountPercentage = document.getElementById('percentage').value;

//     if (!isNaN(billAmount) && !isNaN(discountPercentage)) {
//         var discountAmount = (billAmount * (discountPercentage / 100));
//         document.getElementById('bottom').textContent = "Total Discount Amount: " + discountAmount;
//     } else {
//         document.getElementById('bottom').textContent = "Please enter valid numbers for bill amount and discount percentage.";
//     }
// });