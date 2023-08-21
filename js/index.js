
let total = 0;
let itemCounter = 1;
function handleClickBtn(target) {

    const selectedItemContainer = document.getElementById('item-name')
    const itemName = target.childNodes[3].innerText.split('\n')[0]
    console.log(itemName)
    const li = document.createElement('li')
    li.style.listStyle = 'none'
    li.innerText = itemName;
    li.innerText = `${itemCounter}. ${itemName}`;
    selectedItemContainer.appendChild(li)
    itemCounter++;

    const cardItem = document.querySelector('selected-items')
    const price = target.childNodes[3].innerText.split('\n')[1]
    console.log(price)

    total = parseFloat(total) + parseFloat(price)
    document.getElementById('total-price').innerText = total.toFixed(2) + ' TK';



    const applyButton = document.getElementById('apply-button');
    const couponInput = document.getElementById('coupon-input');
    const totalPriceSpan = document.getElementById('total-price');
    const discountSpan = document.getElementById('discount');
    const finalPriceSpan = document.getElementById('total-amount');

    couponInput.addEventListener('keyup', function () {
        const text = couponInput.value
     
        if (text === 'SELL200' && total >= 200) {
            applyButton.removeAttribute('disabled');

            const discountAmount = total * 0.2; 
            const discountedPrice = total - discountAmount;

            totalPriceSpan.innerText = total.toFixed(2) + ' TK';
            discountSpan.innerText = discountAmount.toFixed(2) + ' TK';
            finalPriceSpan.innerText = discountedPrice.toFixed(2) + ' TK'

        } else {
            applyButton.setAttribute('disabled', true);
            totalPriceSpan.innerText = total.toFixed(2);

        }
    });


}

document.addEventListener('click', function () {
    const totalPrice = parseFloat(document.getElementById('total-price').innerText);
    const purchaseButton = document.getElementById('purchase-btn');

    if (totalPrice >= 1) {
        purchaseButton.removeAttribute('disabled');
        
    } else {
        purchaseButton.setAttribute('disabled', true);
    }

});

document.getElementById('purchase-btn').addEventListener('click', function(){
    const modal = document.getElementById('my_modal_2');
        modal.showModal();
})
function goHome() {
    window.location.href = 'index.html'
}