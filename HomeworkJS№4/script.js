//Task 1
let ar1 = ['apple', 3, true]
const btn = document.querySelector('.b-1')
const contentBlock = document.querySelector('.out-1')
btn.addEventListener('click', () => {
    contentBlock.innerHTML = arr1
})

//Task 2
let ar2 = ['apple', 3, true]
const btn2 = document.querySelector('.b-2')
const contentBlock2 = document.querySelector('.out-2')
btn2.addEventListener('click', () => {
    contentBlock2.innerHTML = `Our array loks like [ ${ar2} ]`
})

//Task 3
let ar3 = [1, 2, 3, 3, 4, 'TV', false]
console.log(`Length of ar3 is ${ar3.length}`)

//Task 4
let ar4 = [10, 11, 'blueberry', true, 'Ivan', 3.4, 333, 888, 1000000]
const contentBlock4 = document.querySelector('.out-4')
contentBlock4.innerHTML = ar4[0] + ' ' + ar4[3] + ' ' + ar4[8]

//Task 5
let ar5 = [2, 12, 45, 33, 86, 90, 54]
console.log(ar5[0] + ar5[2] + ar5[3])

//Task 6
let ar6 = ['Ivan', 'Streletz', 3, 12]
const contentBlock6 = document.querySelector('.out-6')
contentBlock6.innerHTML = ar6.join(' ')

//Task 7
let ar7 = ['china', 'india', 'brazil', 'japan', 'egypt']
ar7.splice(5, 0, 'italy')
ar7.splice(6, 0, 'turkey')
ar7.splice(7, 0, 'vietnam')
const contentBlock7 = document.querySelector('.out-7')
contentBlock7.innerHTML = ar7.join(' ')

//Task 8
let ar8 = []
ar8.splice(3, 0, 3.14)
ar8.splice(4, 0, 17)
ar8.splice(6, 0, 5)
const contentBlock8 = document.querySelector('.out-8')
const contentBlock8_1 = document.querySelector('.out-8-1')
contentBlock8.innerHTML = ar8.join('-')
contentBlock8_1.innerHTML = ar8.length

//Task 9
let ar9 = [100, 200, 300, 400, 700, 121]
console.log(ar9[ar9.length - 1])

//Task 10
console.log('-----------------------')
let ar10 = [100, 200, 300, 400, 700, 121]
let sum = 0;
for (let i = 0; i < ar10.length; i++) {
    if (i === 0 || i === ar10.length - 1)
        sum += ar10[i]
}
const contentBlock10 = document.querySelector('.out-10')
contentBlock10.innerHTML = sum

//Task 11
let ar11 = [2, 3, 4, 5, 6, 7]
function swapElements(index1, index2, arr) {
    let tempVar = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = tempVar
}
swapElements(2, 4, ar11)
const contentBlock11 = document.querySelector('.out-11')
contentBlock11.innerHTML = ar11.join(' ')

//Task 12
let ar12 = ['test', 'west', 'list', 'class', 'best']
function swapElements_12(arr, index1 = 0) {
    let tempVar = arr[index1]
    arr[index1] = arr[arr.length - 1]
    arr[arr.length - 1] = tempVar
}
swapElements_12(ar12)
const contentBlock12 = document.querySelector('.out-12')
contentBlock12.innerHTML = ar12.join(' ')

//Task 13
let ar13 = ['test', 'west', 'list', 'class', 'best']
const contentBlock13 = document.querySelector('.out-13')
ar13.forEach((element, index) => {
    contentBlock13.innerHTML += index + ' ' + element + ' '
})

//Task 14
let ar14 = [1, 2, 3, 'hello', 66]
const contentBlock14 = document.querySelector('.out-14')
for (let i = ar14.length - 1; i >= 0; i--) {
    contentBlock14.innerHTML += ar14[i] + ' '
}

//Task 15
let ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78]
const contentBlock15 = document.querySelector('.out-15')
for (let i = 0; i < ar15.length; i++) {
    if (ar15[i] > 0) {
        contentBlock15.innerHTML += ar15[i] + ' '
    }
}

//Task 16
let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78]
let ar16_odd = []
let ar16_even = []
for (let i = 0; i < ar16.length; i++) {
    if (ar16[i] % 2 === 0) {
        ar16_even.push(ar16[i])
    }
    else {
        ar16_odd.push(ar16[i])
    }
}
const contentBlock16_odd = document.querySelector('.out-16-odd')
const contentBlock16_even = document.querySelector('.out-16-even')
contentBlock16_odd.innerHTML = ar16_odd.join(' ')
contentBlock16_even.innerHTML = ar16_even.join(' ')

//Task 17
let ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0]
let counter = 0
for (let i = 0; i < ar17.length; i++) {
    if (ar17[i] > 3) {
        counter++
    }
}
const contentBlock17 = document.querySelector('.out-17')
contentBlock17.innerHTML = `In this array is ${counter} elements whose value is greater than 3`

//Task 18
let ar18 = [15, 24, 13, 78, 21, 4, 45, 67]
let maxElement = ar18[0]
for (let i = 0; i < ar18.length; i++) {
    if (ar18[i] > maxElement) {
        maxElement = ar18[i]
    }
}
const contentBlock18 = document.querySelector('.out-18')
contentBlock18.innerHTML = `Maximum element of this array is ${maxElement}`

//Task 19
let ar19 = [15, 424, 313, , 78, 241, 4, 45, 67]
let minElement = ar19[0]
for (let i = 0; i < ar18.length; i++) {
    if (ar19[i] < minElement) {
        minElement = ar19[i]
    }
}
const contentBlock19 = document.querySelector('.out-19')
contentBlock19.innerHTML = `Minimum element of this array is ${minElement}`

//Task 20
let ar20 = [4, 5, 6, 7, 8, 9, 10]
let Sum = 0
for (let i = 0; i < ar20.length; i++) {
    Sum += ar20[i]
}
const contentBlock20 = document.querySelector('.out-20')
contentBlock20.innerHTML = `The sum of elements in this array is equal ${Sum}`






