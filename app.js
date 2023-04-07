const toggle = document.querySelector("#check");
const price = document.querySelectorAll(".price");
const PriceMonthly = [19.99, 24.99, 39.99]
const PriceYearly = [199.99, 249.99, 399.99]

toggle.addEventListener("click", () => {
    for (let i = 0; i < price.length; i++) {
        if (toggle.checked) {
            price[i].innerHTML = "&dollar;" + PriceMonthly[i];
        } else {
            price[i].innerHTML = "&dollar;" + PriceYearly[i];
        }
    }
})