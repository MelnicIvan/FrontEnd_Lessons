//Task 1
let block1 = document.querySelector(".out-1");

function f1() {
    block1.style = "width:200px; height: 90px";
}

//Task 2
let block2 = document.querySelector('.out-2');
function f2() {
    block2.classList.add('bg-orange');
}

//Task 3
let block3 = document.querySelector('.bg-orange');
function f3() {
    block3.classList.remove('bg-orange');
}

//Task 4
let block4 = document.querySelector('.out-4');
function f4() {
    block4.classList.toggle('bg-orange');
}

//Task 5
let block5 = document.querySelector('.out-5');
function f5() {
    if (block4.classList.contains('bg-orange')) {
        block5.innerHTML = 'out-4 contains class bg-orange';
    } else {
        block5.innerHTML = 'out-4 don\'t contains class bg-orange';
    }
}

//Task 6
let block6 = document.querySelector('.out-6');
function f6() {
    let amountP6classes = document.querySelectorAll(".p-6");
    block6.innerHTML = `Всего ${amountP6classes.length} параграфов с классом p-6`
}

//Task 7
let block7 = document.querySelectorAll('.out-7');
function f7() {
    for (let i = 0; i < block7.length; i++) {
        block7[i].classList.add("bg-orange");
    }
}

//Task 8
let block8 = document.querySelectorAll('.out-8');
function f8() {
    for (let i = 0; i < block8.length; i++) {
        block8[i].classList.toggle("bg-orange");
    }
}

//Task 9
let block9 = document.querySelectorAll('.out-9');
for (let i = 0; i < block9.length; i++) {
    block9[i].setAttribute('onclick', 'f9(event)');
}

function f9(event) {
    event.target.classList.add('bg-orange');
}

//Task 10
let block10 = document.querySelectorAll('.out-10');
for (let i = 0; i < block10.length; i++) {
    block10[i].setAttribute('onclick', 'f10(event)');
}

function f10(event) {
    event.target.classList.toggle('bg-orange');
}

//Task 11
function f11() {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = 25;
    let out11 = document.querySelector(".out-11");
    out11.append(newDiv);
}

//Task 12
function f12() {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = 12;
    newDiv.classList.add('bg-12')
    let out12 = document.querySelector(".out-12");
    out12.append(newDiv);
}

//Task 13
function f13() {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = 'pushMe';
    newDiv.classList.add('bg-orange');
    newDiv.setAttribute('onclick', 'f13_1');
    let out13 = document.querySelector(".out-13");
    out13.append(newDiv);
}

//Task 14
function f14() {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = 14;
    newDiv.classList.add('bg-orange');
    let out14 = document.querySelector(".out-14");
    out14.append(newDiv);
}

//Task 15
function f15() {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = 15;
    newDiv.classList.add('bg-orange');
    let out15 = document.querySelector(".out-15");
    out15.before(newDiv);
}

//Task 16
function f16() {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = 16;
    newDiv.classList.add('bg-orange');
    let out16 = document.querySelector(".out-16");
    out16.after(newDiv);
}

//Task 17
function f17() {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = 17;
    newDiv.classList.add('bg-orange');
    let out17 = document.querySelector(".out-17");
    out17.replaceWith(newDiv);
}

//Task 18
let paragraph = document.querySelector('.p-18');
let out18 = document.querySelector(".out-18");
function f18() {
    out18.innerText = paragraph.getAttribute('data-b');
}

//Task 19
let block19 = document.querySelectorAll('.p-19');
let out19 = document.querySelector(".out-19");
let arr = [];
function f19() {
    for (let i = 0; i < block19.length; i++) {
        arr[i] = block19[i].getAttribute('data-b');
    }
    out19.innerText = arr.join(' ');
}

//Task 19
let out20 = document.querySelector('.out-20')
function f20(){
    out20.setAttribute('title', 'go');
}
