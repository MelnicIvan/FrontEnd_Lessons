//Task 1
let inputText = document.querySelector('.i-1');
let btn = document.querySelector('.b-1');
let out_1 = document.querySelector('.out-1');

function f1() {
    let text = document.querySelector('.i-1').value;
    document.querySelector('.i-1').value = ' ';
    let textArray = text.split(' ');
    showArr(textArray, out_1);

    return textArray;
}

function showArr(arr, obj) {
    for (let i = 0; i < arr.length; i++) {
        obj.innerHTML += arr[i];
        obj.innerHTML += ' ';
    }
}

//Task 2
let out_2 = document.querySelector('.out-2');

function f2() {
    let text_2 = document.querySelector('.out-1').innerText;
    let textArray_2 = text_2.split(' ');
    textArray_2.pop();

    showArr(textArray_2, out_2);
}

//Task 3
let out_3 = document.querySelector('.out-3');

function f3() {
    let text_3 = document.querySelector('.out-1').innerText;
    let textArray_3 = text_3.split(' ');
    textArray_3.shift();

    showArr(textArray_3, out_3);
}

//Task 4
let inputText4 = document.querySelector('.i-4');
let btn4 = document.querySelector('.b-4');
let out_4 = document.querySelector('.out-4');

function f4() {
    let text_4 = document.querySelector('.out-1').innerText;
    let textArray_4 = text_4.split(' ');

    let text4 = document.querySelector('.i-4').value;
    document.querySelector('.i-4').value = ' ';

    textArray_4.push(text4);

    showArr(textArray_4, out_4);
}

//Task 5
let inputText5 = document.querySelector('.i-5');
let btn5 = document.querySelector('.b-5');
let out_5 = document.querySelector('.out-5');

function f5() {
    let text_5 = document.querySelector('.out-1').innerText;
    let textArray_5 = text_5.split(' ');

    let text5 = document.querySelector('.i-5').value;
    document.querySelector('.i-5').value = ' ';

    textArray_5.unshift(text5);

    showArr(textArray_5, out_5);
}

//Task 6
let inputText6 = document.querySelector('.i-6');
let btn6 = document.querySelector('.b-6');
let out_6 = document.querySelector('.out-6');

let array_6 = [];
let currentIndex = array_6.length;

function f6() {
    array_6[currentIndex] = document.querySelector('.i-6').value;
    document.querySelector('.i-6').value = ' ';
    currentIndex++;
    document.querySelector('.out-6').innerHTML = '';
    showArr(array_6, out_6);
}

//Task 7

let btn7 = document.querySelector('.b-7');
let out_7 = document.querySelector('.out-7');

let d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

function f7() {
    d7.splice(-1);
    document.querySelector('.out-7').innerHTML = '';
    showArr(d7, out_7);
}

//Task 8
//Можно усовершенствовать
let inputText8 = document.querySelector('.i-8');
let btn8 = document.querySelector('.b-8');
let out_8 = document.querySelector('.out-8');

let d8 = [2, '4', 12, 67, 'hello'];
let d8_res = [];

function f8() {
    let indexAr = 0;
    d8_res[indexAr++] = document.querySelector('.i-8').value;
    for (let i = 0; i < d8.length; i++) {
        d8_res[indexAr++] = d8[i];
    }
    document.querySelector('.i-8').value = ' ';
    document.querySelector('.out-8').innerHTML = '';
    showArr(d8_res, out_8);
}

//Task 9
let d9 = [100, 200, 300, 400, 700, 121];
let btn9 = document.querySelector('.b-9');
let out_9 = document.querySelector('.out-9');
let counter = 0;
let d9_res = [];

function f9() {
    if (counter === 0) {
        for (let i = 0; i < d9.length - 1; i++) {
            d9_res[i] = d9[i + 1];
        }
        d9.length--;
        document.querySelector('.out-9').innerHTML = '';
        showArr(d9_res, out_9);
        counter++;
    } else {
        for (let i = 0; i < d9.length - 1; i++) {
            d9_res[i] = d9_res[i + 1];
        }
        d9.length--;
        d9_res.length--;
        document.querySelector('.out-9').innerHTML = '';
        showArr(d9_res, out_9);
    }
}

//Task 10

let btn10 = document.querySelector('.b-10');
let out_10 = document.querySelector('.out-10');
let d10 = [3, 14, 15, 92, 6];

function f10() {

    document.querySelector('.out-10').innerHTML = '';
    d10.reverse();
    showArr(d10, out_10);
}

//Task 11

let d11 = [2, 3, 4, 5, 6, 7];
let inputText11 = document.querySelector('.i-11');
let btn11 = document.querySelector('.b-11');
let out_11 = document.querySelector('.out-11');

function f11() {
    let number = Number(document.querySelector('.i-11').value);
    let counter = d11.indexOf(number);
    if (counter === -1) {
        document.querySelector('.out-11').innerHTML = -1;
    } else {
        document.querySelector('.out-11').innerHTML = counter;
    }
}

//Task 12
let btn12 = document.querySelector('.b-12');
let out_12 = document.querySelector('.out-12');
let d12 = [6, 62, 60, 70, 1, 5];

function f12() {
    let numberG = Number(document.querySelector('.i-12').value);
    for (let i = 0; i < d12.length; i++) {
        if (d12[i] === numberG) {
            document.querySelector('.out-12').innerHTML = i;
            break;
        } else {
            document.querySelector('.out-12').innerHTML = -1;
        }
    }
}

//Task 13

let btn13 = document.querySelector('.b-13');
let out_13 = document.querySelector('.out-13');
let d13 = [6, 0, 22, 1, 4, 76];
let reverseArray = [];
let indexAr = 0;

function f13() {
    for (let i = d13.length - 1; i >= 0; i--) {
        reverseArray[indexAr++] = d13[i];
    }
    indexAr = 0;
    document.querySelector('.out-13').innerHTML = '';
    showArr(reverseArray, out_13);
}

//Task 14

let inputText14 = document.querySelector('.i-14');
let btn14 = document.querySelector('.b-14');
let out_14 = document.querySelector('.out-14');


function f14() {
    let array14 = [];
    let number = Number(document.querySelector('.i-14').value);

    for (let i = 0; i < number; i++) {
        array14[i] = 1;
    }
    document.querySelector('.i-14').value = ' ';
    document.querySelector('.out-14').innerHTML = '';
    showArr(array14, out_14);
}

//Task 15

let inputText15 = document.querySelector('.i-15');
let btn15 = document.querySelector('.b-15');
let out_15 = document.querySelector('.out-15');
let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

function f15() {
    let counter = 0;
    let number = Number(document.querySelector('.i-15').value);
    for (let i = 0; i < d15.length; i++) {
        if (number === d15[i]) {
            document.querySelector('.out-15').innerHTML = 'Введенное число уже есть в массиве!';
            counter = 1;
            break;
        }
    }
    if (counter === 0) {
        d15.length++;
        d15[d15.length - 1] = number;
        showArr(d15, out_15);
    }
}

//Task 16

let btn16 = document.querySelector('.b-16');
let out_16 = document.querySelector('.out-16');
let d16 = [];
let d161 = [5, 6, 7, 8, 9];
let d162 = [23, 24, 56, 87];

function f16() {
    d16 = d161.concat(d162);
    document.querySelector('.out-16').innerHTML = '';
    showArr(d16, out_16);
}

//Task 17

let btn17 = document.querySelector('.b-17');
let out_17 = document.querySelector('.out-17');

function f17() {
    let d17 = [];
    let d171 = ['a', 'b', 'c', 'd'];
    let d172 = [1, 2, 3, 4, 5];
    d17 = d171;
    for (let currentIndex = d17.length, i = 0; currentIndex < d171.length + d172.length, i < d172.length; currentIndex++, i++) {
        d17[currentIndex] = d172[i];
    }
    document.querySelector('.out-17').innerHTML = '';
    showArr(d17, out_17);
}

//Task 18

let inputText18 = document.querySelector('.i-18');
let btn18 = document.querySelector('.b-18');
let out_18 = document.querySelector('.out-18');

let d18 = ['b', 'c', '45', 'e', 'z', 'y'];

function f18(){
    let number = document.querySelector('.i-18').value;
    let result = d18.includes(number);

    document.querySelector('.out-18').innerHTML = result;
}

//Task 19

let btn19 = document.querySelector('.b-19');
let out_19 = document.querySelector('.out-19');

let d19 = ['Your','payment','method','will','automatically','be','charged','in','advance','every' ];
let maxStr = d19[0];

function f19(){
    for(let i = 0; i < d19.length; i++){
        if(d19[i].length > maxStr.length){
            maxStr = d19[i];
        }
    }
    document.querySelector('.out-19').innerHTML = maxStr;
}

//Task 20

let btn20 = document.querySelector('.b-20');
let out_20 = document.querySelector('.out-20');
let d20 = [4,5,6,7,8,9,10];

function f20(){
    let finalStr = d20.join('');
    document.querySelector('.out-20').innerHTML = '';
    document.querySelector('.out-20').innerHTML = finalStr;
}


































