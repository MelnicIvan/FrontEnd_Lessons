//Task 1
function rectanglePerimetr(a, b){
    return 2*(a+b);
}
console.log('The perimetr of rectangle is ' + rectanglePerimetr(3,4) + ' cm');

//Task 2
function areaRectangle(a, b){
    return a*b;
}
console.log('The area of rectangle is ' + areaRectangle(3,4) + ' cm^2');

//Task 3
function trianglePerimetr(a, b, c){
    return a+b+c;
}
console.log('The perimetr of triangle is ' + trianglePerimetr(2,4,3) + ' cm');

//Task 4
function triangleArea(a, b){
    return 1/2*(a*b);
}
console.log('The area of triangle is ' + triangleArea(4,6) + ' cm^2');

//Task 5
function squarePerimetr(a){
    return 4*a;
}
console.log('The perimetr of square is ' + squarePerimetr(5) + ' cm');

//Task 6
function squareArea(a){
    return a*a;
}
console.log('The area of square is ' + squareArea(4) + ' cm^2');

//Task 7
function degree(a, degreeNum){
    let result=1;
    for(let num = 1; num <= degreeNum; num++){
        result = result * a;
    }
    return result;
}
console.log(`Number 2 in degree 4 is equal ` + degree(2, 4));

