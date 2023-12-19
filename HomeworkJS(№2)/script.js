//Task 1
const a = 7;
const b = 9;
console.log(a*b);

//Task 2
const c = 7;
const d = 9;
console.log(c/d);

//Task 3
const e = 3;
const f = 5;
console.log(e+f);

//Task 4
const e1 = '3';
const f1 = 5;
console.log(e1+f);

//Task 5
const e2 = 3;
const f2 = 0;
console.log(e2/f2);

//Task 6
const e3 = 3;
const f3 = 'Hello';
console.log(e3+f3);

//Task 7
const e4 = 3;
const f4 = 'Hello';
console.log(e*f);

//Task 8
const bnt= document.querySelector('.b-8');
bnt.onclick = function (){
    let inputContent = document.getElementById('in').value;
    document.querySelector('.out-8').innerHTML = inputContent;
}

//Task 9
function t9(){
    let content = document.querySelector('.i-9').value;
    document.querySelector('.out-9').innerHTML = content;
    document.querySelector('.i-9').value = '';
}

//Task 10
let btn10 = document.querySelector('.b-10');
btn10.onclick = function (){
    let cont = document.querySelector('.i-10').value;
    document.querySelector('.out-10').textContent = cont * 20;
}

//Task 11
let btn11 = document.querySelector('.b-11');
btn11.onclick = function (){
    let cont = document.querySelector('.i-11').value;
    document.querySelector('.out-11').textContent = cont + 55;
}

//Task 12
function t12(){
    let name = document.querySelector('.a12-1').value;
    let lastname = document.querySelector('.a12-2').value;
    document.querySelector('.out-12').innerHTML = 'Hello ' + name + ' ' + lastname;
}

//Task 13
function t13(){
    let a = document.querySelector('.i-13-1').value;
    let b = document.querySelector('.i-13-2').value;
    document.querySelector('.out-13').innerHTML = Number(a) + Number(b);
}

//Task 14
function t14(){
    document.querySelector('.i-14').value = 'Go';
}

//Task 15
function t15(){
    document.querySelector('.i-15').style.border = '4px solid red';
}

//Task 16
function t16(){
    let num1 = document.querySelector('.i-16-1').value;
    let num2 = document.querySelector('.i-16-2').value;
    document.querySelector('.out-16').innerHTML = num1 + num2;
}

//Task 17
function t17(){
    let n1 = document.querySelector('.i-17').value;
    document.querySelector('.out-17').innerHTML = Number(n1);
}

//Task 18
function t18(){
    let a = document.querySelector('.i-18').value;
    document.querySelector('.out-18').innerHTML = parseFloat(a);
}

//Task 19
function t19(){
    let c = document.querySelector('.i-19-1').value;
    let d = document.querySelector('.i-19-2').value;
    document.querySelector('.out-19').innerHTML = Number(-c) + Number(-d);
}

//Task 20
counter = 0;
let btn20 = document.querySelector('.b-20');
btn20.onclick  = function(){
document.querySelector('.out-20').innerHTML = 'Вы нажали на кнопку ' + ++counter + ' раз';
}