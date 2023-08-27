const products = document.querySelectorAll(".product-card");
const makePurchaseBtn = document.querySelector("#make-purchase-btn");
const applyCouponBtn = document.querySelector("#apply-coupon-btn");
const totalPriceElement = document.querySelector("#total-price");
const discountElement = document.querySelector("#discount");
const totalElement = document.querySelector("#total");
const couponInput = document.querySelector("#coupon-input");
let isCouponApplied = false;



for (const product of products) {
    product.addEventListener("click", getCardInfo);
}

function getCardInfo() {
    const prodName = this.querySelector(".card-title").innerText;
    const prodPrice = parseFloat(this.querySelector("#prod-price").innerText);
    addToCard(prodName, prodPrice);
    // console.log(prodName, prodPrice);
}



function addToCard(prodName, prodPrice) {
    const prodList = document.querySelector("#product-list");
    const cardProdList = prodList.children;

    let nextProdNum = 0;
    for (const prod of cardProdList) {
        nextProdNum++;
    }

    const newProd = document.createElement("h2");
    newProd.innerText = `${++nextProdNum}. ${prodName}`;
    newProd.classList.add("font-bold");
    prodList.appendChild(newProd);


    let totalPrice = parseFloat(totalPriceElement.innerText);
    totalPrice += prodPrice;
    totalPriceElement.innerText = totalPrice.toFixed(2);
    totalElement.innerText = totalPrice.toFixed(2);

    if (totalPrice > 0) {
        makePurchaseBtn.setAttribute("href", "#my_modal_8");
        makePurchaseBtn.classList.remove("bg-pink-300");
        makePurchaseBtn.classList.add("bg-pink-500");
    }

    if (totalPrice >= 200) {
        applyCouponBtn.disabled = false;
        applyCouponBtn.classList.remove("bg-pink-300");
        applyCouponBtn.classList.add("bg-pink-500");
    }
}

applyCouponBtn.addEventListener("click", function (event) {
    // event.stopPropagation();
    if (couponInput.value.trim() === "SELL200" && isCouponApplied === false) {
        let totalPrice = parseFloat(totalPriceElement.innerText);
        discountElement.innerText = (totalPrice * .2).toFixed(2);
        totalElement.innerHTML = (totalPrice * (1 - .2)).toFixed(2);
        alert("Successfully coupon is applied.");
        isCouponApplied = true;
    }
    else if (isCouponApplied === true) {
        alert("Coupon already applied.")
    }
    else {
        alert("Coupon code is invalid.");
    }
});


