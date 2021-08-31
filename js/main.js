let enable = true;

// memory cost 
const freeRam = document.getElementById("eightGbFreeRam");
const paidRam = document.getElementById("sxteenGbPaidRam");
const momoryCostField = document.getElementById("memory-cost");

// storage cost 
const storage256Gb = document.getElementById("storage-256-gb");
const storage512Gb = document.getElementById("storage-512-gb");
const storage2Tb = document.getElementById("storage-1-tb");


// dalivary Cost 
const freeDalivaryCost = document.getElementById("free-dalivary-cost");
const paidDalivaryCost = document.getElementById("paid-dalivary-cost");

// best Price 
const bestPrice = document.getElementById("best-price");

// storage Cost 
const storageCostField = document.getElementById("storage-cost")

// dalivary cost field

const dalibaryCostField = document.getElementById("dalivary-cost")


// total Price 

const totalPrice = document.getElementById("total-price");
// calculate Total

const allTotal = document.getElementById("all-total");



function updateTotal() {

    momoryCost = parseInt(momoryCostField.innerText);
    storageCost = parseInt(storageCostField.innerText);
    dalivaryCost = parseInt(dalibaryCostField.innerText);
    neoryBestPrice = parseInt(bestPrice.innerText);
    totalCost = momoryCost + neoryBestPrice + storageCost + dalivaryCost;
    totalPrice.innerText = totalCost;
    allTotal.innerText = totalCost;
    cuponcalculate()

}

function cuponcalculate() {
    const userCodeField = document.getElementById('user-code');
    const userCode = userCodeField.value;
    if (userCode == 'stevekaku') {
        const parcentCalculate = totalCost * (20 / 100);
        allTotalValue = totalCost - parcentCalculate;
        allTotal.innerText = allTotalValue;
        userCodeField.value = "";
        enable = false;
        // console.log(allTotalValue);

    }
    else {

        return "cupon is not true";
    }
   
}

// memory cost 
freeRam.addEventListener('click', function () {
    if (enable) {
        momoryCostField.innerText = "0";
        updateTotal();
    }

});

paidRam.addEventListener('click', function () {
    if (enable) {
        momoryCostField.innerText = "180";
        updateTotal();
    }
});

// storage 
storage256Gb.addEventListener('click', function () {
    if (enable) {
        storageCostField.innerText = "0";
        updateTotal();
    }
});

storage512Gb.addEventListener('click', function () {
    if (enable) {
        storageCostField.innerText = "100";
        updateTotal();
    }
});

storage2Tb.addEventListener('click', function () {
    if (enable) {
        storageCostField.innerText = "180";
        updateTotal();
    }
});


// dalivary Cost 


freeDalivaryCost.addEventListener('click', function () {
    if (enable) {
        dalibaryCostField.innerText = "0";
        updateTotal();
    }
});

paidDalivaryCost.addEventListener('click', function () {
    if (enable) {
        dalibaryCostField.innerText = "20";
        updateTotal();
    }
});


// code 

document.getElementById('code-btn').addEventListener("click", function () {
    updateTotal();
});