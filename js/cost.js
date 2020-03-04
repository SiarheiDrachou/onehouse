let costRangeEl = document.querySelector('.cost__area-range');
let costTypeEl = document.querySelector('.cost__type');
let costViewEl = document.querySelector('.cost__view');
let inputEl = document.querySelector('.cost__area-input');
let radioTypeEl1 = document.querySelector('.cost__type-card-1-radiobutton');
let radioTypeEl2 = document.querySelector('.cost__type-card-2-radiobutton');
let radioViewEl1 = document.querySelector('.cost__view-card-1-radiobutton');
let radioViewEl2 = document.querySelector('.cost__view-card-2-radiobutton');
let radioViewEl3 = document.querySelector('.cost__view-card-3-radiobutton');
let costPriceRub = document.querySelector('.cost__price-rub');
let costPriceUsd = document.querySelector('.cost__price-dollar');
let buttonEl = document.querySelector('.cost__calculate-button');
let cost;

function range(event) {
    inputEl.value = `${event.target.value}`;
}

function type(event) {
    if(radioTypeEl1.checked == true && radioViewEl1.checked == true && inputEl.value <= 90) {
        cost = 600;
    }

    else if(radioTypeEl1.checked == true && radioViewEl1.checked == true && (inputEl.value > 90 && inputEl.value <= 120)) {
        cost = 800;
    }

    else if(radioTypeEl1.checked == true && radioViewEl1.checked == true && inputEl.value > 120) {
        cost = Math.ceil(inputEl.value * 8);
    }

    if(radioTypeEl1.checked == true && radioViewEl2.checked == true && inputEl.value <= 90) {
        cost = 1800;
    }

    else if(radioTypeEl1.checked == true && radioViewEl2.checked == true && (inputEl.value > 90 && inputEl.value <= 120)) {
        cost = 2100;
    }

    else if(radioTypeEl1.checked == true && radioViewEl2.checked == true && inputEl.value > 120) {
        cost = Math.ceil(500 + inputEl.value * 15);
    }

    if(radioTypeEl1.checked == true && radioViewEl3.checked == true && inputEl.value <= 90) {
        cost = 2700;
    }

    else if(radioTypeEl1.checked == true && radioViewEl3.checked == true && (inputEl.value > 90 && inputEl.value <= 120)) {
        cost = 3400;
    }

    else if(radioTypeEl1.checked == true && radioViewEl3.checked == true && inputEl.value > 120) {
        cost = Math.ceil(500 + inputEl.value * 15 + 1300);
    }


    if(radioTypeEl2.checked == true && radioViewEl1.checked == true && inputEl.value <= 110) {
        cost = 350;
    }

    else if(radioTypeEl2.checked == true && radioViewEl1.checked == true && (inputEl.value > 110 && inputEl.value <= 180)) {
        cost = 400;
    }

    else if(radioTypeEl2.checked == true && radioViewEl1.checked == true && (inputEl.value > 180 && inputEl.value <= 250)) {
        cost = 500;
    }

    else if(radioTypeEl2.checked == true && radioViewEl1.checked == true && inputEl.value > 250) {
        cost = Math.ceil(Math.round((inputEl.value * 2.2) / 5) * 5);
    }

    if(radioTypeEl2.checked == true && radioViewEl2.checked == true && inputEl.value <= 90) {
        cost = 1300;
    }

    else if(radioTypeEl2.checked == true && radioViewEl2.checked == true && (inputEl.value > 90 && inputEl.value <= 120)) {
        cost = 1700;
    }

    else if(radioTypeEl2.checked == true && radioViewEl2.checked == true && inputEl.value > 120) {
        cost = Math.ceil(150 + inputEl.value * 15);
    }

    if(radioTypeEl2.checked == true && radioViewEl3.checked == true && inputEl.value <= 90) {
        cost = 2200;
    }

    else if(radioTypeEl2.checked == true && radioViewEl3.checked == true && (inputEl.value > 90 && inputEl.value <= 120)) {
        cost = 2900;
    }

    else if(radioTypeEl2.checked == true && radioViewEl3.checked == true && inputEl.value > 120) {
        cost = Math.ceil(150 + inputEl.value * 15 + 1300);
    }

    
}

function button() {
    costPriceRub.innerHTML = `${cost}р.`;
    costPriceUsd.innerHTML = `&asymp; ${Math.ceil(cost * 2.2)}$`;
}

function costRangeElListener(event) {
    range(event);
    type(event);
}
costRangeEl.addEventListener('mousemove', costRangeElListener);

function costTypeElListener(event) {
    type(event);
}
costTypeEl.addEventListener('click', costTypeElListener);

function costViewElListener(event) {
    type(event);
}
costViewEl.addEventListener('click', costViewElListener);

function buttonElListener(event) {
    button();
}
buttonEl.addEventListener('click', buttonElListener);